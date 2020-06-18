FROM mongo

COPY users.sh /docker-entrypoint-initdb.d/users.sh

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mongod"]
