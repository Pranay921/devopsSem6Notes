FROM eclipse-temurin:17
WORKDIR /app
COPY App.java /app/
RUN javac App.java
CMD ["sh", "-c", "java App && tail -f /dev/null"]