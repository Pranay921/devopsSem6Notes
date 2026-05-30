Introduction to Maven

Maven is a powerful build automation and project management tool developed by Apache. It is primarily used for Java applications and helps developers manage project dependencies, automate builds, run tests, package applications, and deploy software in a standardized manner.

The main philosophy behind Maven is "Convention over Configuration", meaning developers follow a predefined project structure instead of manually configuring every aspect of the project.

Why Build Tools Exist

As software projects grow, managing them manually becomes difficult. A project may contain hundreds of source files, external libraries, test cases, configuration files, and deployment scripts.

Without a build tool, developers would need to:

Compile source code manually
Download and manage dependencies manually
Execute tests manually
Package applications manually
Deploy applications manually

Build tools automate these repetitive tasks, improve consistency, and reduce human errors.

Problems Solved by Automated Builds

Automated build systems solve several challenges:

Dependency Management

Applications often depend on external libraries. Maven automatically downloads and manages these dependencies.

Build Consistency

Every developer and server uses the same build process, eliminating "works on my machine" problems.

Faster Development

Developers focus on writing code instead of managing build processes.

Reproducible Builds

Projects can be built consistently on any machine using the same configuration.

Continuous Integration Support

Automated builds integrate easily with Jenkins, GitHub Actions, GitLab CI/CD, and other CI/CD tools.

Project Object Model (POM)

The Project Object Model (POM) is the core concept of Maven.

Every Maven project contains a file called:

pom.xml

The POM file contains:

Project information
Dependencies
Build configuration
Plugins
Repository information
Project version details

It acts as the blueprint of the entire project.

Maven Directory Structure

Maven follows a standard directory layout.

The standard structure separates:

Production code
Test code
Resources
Build outputs

Benefits include:

Consistency across projects
Easier maintenance
Better collaboration among developers
Compatibility with Maven plugins

The build output is stored in the target directory.

Maven Build Lifecycle

A lifecycle is a sequence of phases executed in a specific order.

Maven provides three built-in lifecycles:

Default Lifecycle

Handles project deployment.

Clean Lifecycle

Removes previously generated files.

Site Lifecycle

Generates project documentation.

The Default Lifecycle is the most commonly used.

Validate Phase

The validate phase checks whether the project structure and configuration are correct.

It verifies:

Project directory structure
POM syntax
Required information

This is the first phase in the build process.

Compile Phase

The compile phase converts Java source files into bytecode (.class files).

It compiles the code present in:

src/main/java

The generated class files are stored inside:

target/classes
Test Phase

The test phase executes unit tests.

Its purpose is to verify that the application behaves correctly before packaging.

Common testing frameworks:

JUnit
TestNG
Mockito

If any test fails, the build process stops.

Package Phase

The package phase bundles compiled code into a distributable format.

Common package types include:

JAR (Java Archive)

Used for standalone Java applications.

WAR (Web Archive)

Used for web applications deployed on servers like Tomcat.

The generated package is stored in the target directory.

Verify Phase

The verify phase performs additional quality checks.

Examples include:

Integration testing
Code quality analysis
Security checks

Its goal is to ensure the packaged application is valid and ready for deployment.

Install Phase

The install phase copies the packaged artifact into the local Maven repository.

The local repository is usually located in:

.m2/repository

This allows other local projects to use the artifact as a dependency.

Deploy Phase

The deploy phase publishes artifacts to a remote repository.

Remote repositories may include:

Nexus Repository
JFrog Artifactory
GitHub Packages

This phase is commonly used in CI/CD pipelines.

Parent POM

Large applications often consist of multiple modules.

A Parent POM provides centralized configuration for all child projects.

Benefits:

Shared dependency versions
Shared plugins
Common build configurations
Reduced duplication

Child projects inherit settings from the Parent POM.

Dependency Management

A dependency is an external library required by the application.

Examples:

Spring Boot
Hibernate
MySQL Driver
JUnit

Maven automatically downloads dependencies from repositories and manages them.

This eliminates the need to manually store JAR files inside the project.

Dependency Scope

Dependency scope defines when a dependency is available.

Compile Scope

Available during compilation, testing, and runtime.

Most application dependencies use compile scope.

Test Scope

Available only during testing.

Example:

JUnit

Runtime Scope

Required only while running the application.

Example:

Database drivers.

Provided Scope

Expected to be supplied by the runtime environment.

Example:

Servlet API provided by Tomcat.

System Scope

Dependency is provided through a local file path.

Rarely used.

Transitive Dependencies

Dependencies may depend on other dependencies.

When Maven downloads a dependency, it also downloads the libraries required by that dependency.

This process is called Transitive Dependency Resolution.

For example:

Spring Boot depends on multiple internal libraries.

When Spring Boot is added, Maven automatically downloads all required libraries.

Version Conflicts and Resolution

Version conflicts occur when different libraries require different versions of the same dependency.

Example:

Library A requires Log4j 1.x.

Library B requires Log4j 2.x.

Maven resolves conflicts using the "Nearest Definition Wins" strategy.

The dependency closest to the project in the dependency tree is selected.

Developers can also manually specify the desired version.

Dependency Management Section

The dependencyManagement section centralizes dependency versions.

Advantages:

Consistent versions across projects
Easier upgrades
Simplified maintenance

Child projects inherit versions from the parent configuration.

Maven Plugins

Plugins extend Maven functionality.

Maven itself performs only basic tasks.

Most operations are actually performed through plugins.

Examples:

Compilation
Testing
Packaging
Docker image creation
Code analysis
Maven Compiler Plugin

The Compiler Plugin is responsible for compiling Java source code.

Functions:

Compiles Java classes
Sets Java version
Generates bytecode

It ensures source code is compatible with the specified Java version.

Maven Surefire Plugin

The Surefire Plugin executes unit tests.

Functions:

Runs JUnit tests
Runs TestNG tests
Generates test reports

This plugin is automatically executed during the test phase.

Maven Shade Plugin

The Shade Plugin creates an Uber JAR (Fat JAR).

A normal JAR contains only application classes.

An Uber JAR contains:

Application code
Dependencies
Resources

Benefits:

Simplified deployment
Single executable file
Easier distribution
Maven Wrapper (mvnw)

Different developers may have different Maven versions installed.

The Maven Wrapper solves this issue.

Benefits:

Ensures the same Maven version for all developers
Eliminates manual Maven installation
Improves build consistency

Projects using Maven Wrapper include wrapper scripts inside the repository.

Maven and Docker Integration

Modern applications are commonly deployed using containers.

Maven can integrate directly with Docker.

Workflow:

Build application
Generate artifact
Build Docker image
Push image to registry

This enables complete automation of application packaging and deployment.

dockerfile-maven-plugin

The dockerfile-maven-plugin allows Docker image creation directly from Maven.

Features:

Builds Docker images
Tags images
Pushes images
Integrates with CI/CD pipelines

It eliminates the need to execute Docker commands separately.

Dockerizing Maven-Based Applications

Dockerizing a Maven application involves packaging the application and placing it inside a Docker container.

Benefits:

Portability

Runs consistently across environments.

Scalability

Containers can be replicated easily.

Isolation

Applications run independently.

Cloud Compatibility

Suitable for Kubernetes and cloud deployments.

Pushing Artifacts to Registries

After building software, artifacts are stored in registries.

Artifacts include:

JAR files
WAR files
Docker images
Maven Artifact Registries

Used to store Java artifacts.

Examples:

Nexus Repository
Artifactory
GitHub Packages

Purpose:

Version control
Centralized storage
Team sharing
Docker Registries

Used to store Docker images.

Examples:

Docker Hub
GitHub Container Registry (GHCR)
Amazon Elastic Container Registry (ECR)
Azure Container Registry (ACR)
Google Container Registry (GCR)

Purpose:

Image distribution
Deployment automation
CI/CD integration
Complete Maven Workflow

A typical Maven-based development workflow follows these stages:

Developer writes code.
Maven validates project structure.
Source code is compiled.
Unit tests are executed.
Application is packaged.
Additional verification is performed.
Artifact is installed in the local repository.
Artifact is deployed to a remote repository.
Docker image is built.
Docker image is pushed to a registry.
Application is deployed to production.