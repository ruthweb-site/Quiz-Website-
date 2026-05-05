FROM nginx:alpine

# Remove default nginx index.html
RUN rm /usr/share/nginx/html/index.html

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

