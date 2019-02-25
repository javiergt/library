FROM envoyproxy/envoy
RUN mkdir /var/log/envoy
COPY ./front-envoy/envoy.yaml /etc/envoy.yaml
ENTRYPOINT ["/usr/local/bin/envoy", "-c", "/etc/envoy.yaml"]
