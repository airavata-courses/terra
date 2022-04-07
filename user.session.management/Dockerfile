FROM --platform=linux/x86_64 openjdk:11

ADD target/team-terra.jar team-terra.jar

EXPOSE 8888
 
ENTRYPOINT ["java", "-jar", "team-terra.jar"]