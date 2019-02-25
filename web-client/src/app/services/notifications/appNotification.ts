export interface AppNotification {
  notificationType: AppNotifiationType;
  message: string;
}

export enum AppNotifiationType {
  danger = 'danger',
  warning = 'warning',
  success = 'success',
  info = 'info',
}
