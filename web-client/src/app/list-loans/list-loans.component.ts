import { Component, OnInit } from '@angular/core';
import {
  ListCurrentBookLoansResponse,
  ListCurrentBookLoansRequest,
  ReturnBookRequest,
} from '../services/library/library_pb';
import { LibraryService } from '../services/library/library.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css'],
})
export class ListLoansComponent implements OnInit {
  data: ListCurrentBookLoansResponse[];

  constructor(
    private readonly libraryService: LibraryService,
    private readonly route: ActivatedRoute
  ) {}

  private refreshData() {
    this.data = null;
    const listCurrentBookLoans = new ListCurrentBookLoansRequest();
    const loanList = new Array<ListCurrentBookLoansResponse>();

    listCurrentBookLoans.setBookId(+this.route.snapshot.paramMap.get('id'));
    const loanStream = this.libraryService.client.listCurrentBookLoans(
      listCurrentBookLoans
    );

    loanStream.on('data', response => {
      loanList.push(response);
    });
    loanStream.on('status', status => {
      if (status.code === 0) {
        this.data = loanList;
      }
    });
  }

  ngOnInit() {
    this.refreshData();
  }

  onReturnClicked(item: ListCurrentBookLoansResponse) {
    const returnRequest = new ReturnBookRequest();
    returnRequest.setLoanId(item.getLoanId());
    this.libraryService.client.returnBook(returnRequest, null, err => {
      if (err) {
        console.log(err);
      } else {
        this.refreshData();
      }
    });
  }
}
