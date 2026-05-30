What is Maven?

Maven is a build automation and dependency management tool primarily used for Java projects. It helps developers automate project building, testing, packaging, dependency management, and deployment.

Before Maven, developers had to manually download JAR files, configure classpaths, compile source code, run tests, package applications, and deploy them. Maven automates all these tasks.

Why Build Tools Exist

As software projects grow, manual management becomes difficult.

A typical Java project may contain:

Hundreds of Java files
Multiple external libraries
Unit tests
Configuration files
Deployment scripts

Without a build tool:

Dependencies must be downloaded manually
Compilation must be done manually
Testing must be executed manually
Packaging must be done manually
Deployment becomes error-prone

Build tools solve these problems by automating repetitive tasks.

Popular Build Tools:

Maven
Gradle
Ant
Problems Solved by Maven
Dependency Management

Automatically downloads required libraries from repositories.

Example:

Instead of manually downloading:

Spring
Hibernate
MySQL Driver

Maven downloads them automatically.

Build Automation

Single command:

mvn package

can:

Compile source code
Run tests
Create JAR/WAR
Standardization

Every Maven project follows the same structure.

This makes projects easier to understand and maintain.

Plugin Ecosystem

Maven provides plugins for:

Testing
Packaging
Code analysis
Docker integration
Deployment
Project Object Model (POM)

The heart of Maven is the pom.xml file.

POM stands for Project Object Model.

The pom.xml contains:

Project information
Dependencies
Plugins
Build configuration
Repository configuration

Example:

<project>
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.company</groupId>

    <artifactId>student-app</artifactId>

    <version>1.0</version>
</project>
Important POM Elements
groupId

Uniquely identifies an organization.

Example:

<groupId>com.company</groupId>
artifactId

Project name.

Example:

<artifactId>student-app</artifactId>
version

Current project version.

Example:

<version>1.0</version>
Maven Directory Structure

Standard Maven Project Structure:

project
│
├── pom.xml
│
├── src
│   ├── main
│   │   ├── java
│   │   └── resources
│   │
│   └── test
│       ├── java
│       └── resources
│
└── target
src/main/java

Contains application source code.

Example:

Student.java
Employee.java
src/main/resources

Contains:

application.properties
log4j.xml
configuration files
src/test/java

Contains test classes.

Example:

StudentTest.java
target

Generated automatically after build.

Contains:

.class files
JAR files
WAR files
Maven Build Lifecycle

Maven lifecycle is a sequence of phases.

Main phases:

validate
compile
test
package
verify
install
deploy
validate

Checks whether the project structure and pom.xml are valid.

Command:

mvn validate
compile

Compiles Java source code.

Command:

mvn compile

Output:

target/classes
test

Runs unit tests.

Command:

mvn test

Typically runs:

JUnit tests
Mockito tests
package

Packages compiled code.

Command:

mvn package

Creates:

project.jar

or

project.war

inside target folder.

verify

Performs additional validation checks.

Command:

mvn verify

Checks:

Integration tests
Code quality checks
install

Copies artifact to local Maven repository.

Command:

mvn install

Location:

Windows:

C:\Users\<username>\.m2\repository

Other local projects can now use this artifact.

deploy

Uploads artifact to remote repository.

Command:

mvn deploy

Examples:

Nexus
Artifactory
GitHub Packages
Parent POM

Parent POM allows multiple projects to share common configuration.

Benefits:

Common dependencies
Common plugin versions
Centralized configuration

Example:

Parent Project
│
├── Student Service
├── Teacher Service
└── Admin Service

All child projects inherit from parent POM.

Maven Dependencies

Dependency means an external library needed by your project.

Example:

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>

Maven downloads the library automatically.

Dependency Scope

Determines where a dependency is available.

Compile Scope

Default scope.

Available:

Compile time
Test time
Runtime

Example:

Spring Framework

Test Scope

Available only during testing.

Example:

JUnit

Mockito

Runtime Scope

Required only while running application.

Example:

MySQL Driver

Provided Scope

Dependency provided by server.

Example:

Servlet API

Tomcat provides it.

System Scope

Dependency supplied manually using local path.

Rarely used.

Transitive Dependencies

Dependency can depend on another dependency.

Example:

Your Project
→ Spring Boot
→ Logback

When Spring Boot is downloaded, Logback is also downloaded automatically.

This is called Transitive Dependency.

Version Conflicts

Example:

Library A requires:

Log4j 1.0

Library B requires:

Log4j 2.0

Conflict occurs.

Maven resolves conflicts using:

Nearest Definition Wins Rule

The dependency closest to your project gets selected.

Dependency Management

Used in Parent POM.

Centralizes dependency versions.

Example:

<dependencyManagement>
    <dependencies>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
        </dependency>

    </dependencies>
</dependencyManagement>

Child projects inherit version automatically.

Maven Plugins

Plugins perform actual work.

Examples:

Compilation
Testing
Packaging
Docker Image Building
Compiler Plugin

Responsible for compiling Java code.

Example:

<plugin>
    <artifactId>maven-compiler-plugin</artifactId>
</plugin>

Can specify Java version:

<source>17</source>
<target>17</target>
Surefire Plugin

Runs unit tests.

Example:

<artifactId>maven-surefire-plugin</artifactId>

Executed when:

mvn test

Used with:

JUnit
Mockito
Shade Plugin

Creates Fat JAR (Uber JAR).

Normal JAR:

Contains only application code.

Uber JAR:

Contains:

Application code
Dependencies
Resources

Advantage:

Single executable JAR.

Example:

myapp-all.jar
Maven Wrapper (mvnw)

Problem:

Different developers may have different Maven versions.

Solution:

Maven Wrapper.

Commands:

Linux/Mac:

./mvnw package

Windows:

mvnw.cmd package

Benefits:

Project always uses correct Maven version.

No need to install Maven manually.

Maven and Docker Integration

Goal:

Convert Java application into Docker image automatically.

Workflow:

Source Code
    ↓
Maven Build
    ↓
JAR File
    ↓
Docker Image
    ↓
Container
dockerfile-maven-plugin

Maven plugin for Docker image creation.

Purpose:

Build Docker images directly from Maven.

Example:

<artifactId>dockerfile-maven-plugin</artifactId>

Command:

mvn package dockerfile:build
Dockerizing Maven-Based Applications

Step 1

Build application.

mvn package

Creates:

target/app.jar

Step 2

Create Dockerfile.

FROM openjdk:17

COPY target/app.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]

Step 3

Build image.

docker build -t myapp .

Step 4

Run container.

docker run -p 8080:8080 myapp
Pushing Artifacts to Registries

Artifact means build output.

Examples:

JAR
WAR
Docker Image
Maven Artifact Registry

Upload JAR/WAR.

Command:

mvn deploy

Repositories:

Nexus
Artifactory
GitHub Packages
Docker Registry

Upload Docker images.

Command:

docker push username/app:v1

Examples:

Docker Hub
GitHub Container Registry (GHCR)
AWS ECR
Azure ACR
Google GCR
Complete Maven Workflow
Write Code
     ↓
mvn validate
     ↓
mvn compile
     ↓
mvn test
     ↓
mvn package
     ↓
mvn verify
     ↓
mvn install
     ↓
mvn deploy
     ↓
Docker Build
     ↓
Docker Push
     ↓
Production Deployment