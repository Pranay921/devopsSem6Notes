CI/CD WITH JENKINS

Jenkins is an open-source automation server used to implement Continuous Integration (CI) and Continuous Delivery/Deployment (CD). It automates the software development lifecycle by building, testing, packaging, and deploying applications automatically whenever code changes occur.

JENKINS FOUNDATIONS

Jenkins follows a Master-Agent Architecture. The Master (Controller) is responsible for scheduling jobs, managing pipelines, storing build history, handling plugins, and coordinating agents. Agents are worker machines that execute build and deployment tasks assigned by the Master. This architecture improves scalability because multiple agents can perform builds simultaneously.

Jenkins can be installed on Windows, Linux, macOS, Docker containers, or Kubernetes environments. After installation, Jenkins provides a web-based user interface that allows users to create jobs, monitor builds, configure pipelines, manage plugins, and administer the system.

Plugins are one of Jenkins' most important features. Jenkins supports thousands of plugins that extend its capabilities. Plugins allow integration with GitHub, Maven, Docker, Kubernetes, SonarQube, Slack, AWS, Azure, and many other tools. Plugin management is handled through the Jenkins Plugin Manager where plugins can be installed, updated, or removed.

Security in Jenkins is implemented through authentication and authorization. Jenkins supports local users, LDAP, Active Directory, and OAuth authentication. Different roles can be assigned to users such as Administrator, Developer, Tester, and Viewer. Role-Based Access Control (RBAC) helps restrict access to sensitive jobs, credentials, and deployment pipelines.

JENKINS PIPELINES

Initially Jenkins used Freestyle Jobs where build steps were configured through the graphical interface. Freestyle Jobs are simple and suitable for small projects but become difficult to maintain for large applications.

Pipeline Jobs solve this problem by defining the complete CI/CD workflow as code. Pipeline definitions are stored in a Jenkinsfile, allowing version control and easier maintenance.

Declarative Pipeline Syntax is the modern and recommended approach. It provides a structured and readable format with predefined sections such as agent, stages, and steps. It is easier to understand and maintain.

Scripted Pipeline Syntax uses Groovy programming language and offers greater flexibility. It allows complex logic, loops, conditions, and advanced automation. However, it is harder to read and maintain compared to Declarative Pipelines.

A Jenkinsfile is the file that defines the pipeline. It contains information about stages, build steps, environment variables, parameters, and deployment instructions. Storing Jenkinsfiles inside source repositories ensures consistency across environments.

Parameters allow users to provide input values before starting a build. Examples include environment selection, version numbers, deployment targets, and feature flags.

Environment Variables store configuration values used during pipeline execution. Examples include database URLs, API keys, application names, and deployment environments.

Multi-Branch Pipelines automatically discover branches in a Git repository and create separate pipelines for each branch. This is useful when working with feature branches, development branches, and production branches.

PIPELINE STAGES

The Checkout Stage retrieves source code from Git repositories such as GitHub, GitLab, or Bitbucket.

The Build Stage compiles source code and prepares the application for testing. For Java projects, Maven or Gradle is commonly used.

The Test Stage executes unit tests, integration tests, and other quality checks. If tests fail, the pipeline stops immediately.

The Package Stage generates deployable artifacts such as JAR files, WAR files, ZIP archives, or Docker images.

Post Actions are executed after pipeline completion. These actions include sending notifications, archiving artifacts, cleaning temporary files, and generating reports.

Artifact Management involves storing build outputs in repositories such as Nexus, Artifactory, GitHub Packages, or cloud storage systems. Proper artifact management improves version control and deployment reliability.

DOCKER AND JENKINS INTEGRATION

Jenkins integrates closely with Docker to automate containerized application delivery.

Jenkins can build Docker images directly from source code using Dockerfiles. During the pipeline, the application is built, packaged, and converted into a Docker image.

Docker can also be used inside Jenkins Agents. Instead of installing build tools directly on agents, Docker containers provide isolated and reproducible build environments.

Docker Plugins simplify interaction between Jenkins and Docker. They enable image creation, container management, Docker registry authentication, and deployment operations.

After image creation, Jenkins can publish Docker images to Docker Hub or GitHub Container Registry (GHCR). This allows images to be stored, versioned, and distributed efficiently.

JENKINS AND GITHUB INTEGRATION

GitHub integration allows Jenkins to automatically build applications whenever code changes occur.

Jenkins connects to GitHub repositories using HTTPS credentials, SSH keys, or Personal Access Tokens.

GitHub Webhooks notify Jenkins whenever code is pushed, a pull request is created, or repository events occur. This enables real-time CI/CD execution without manual intervention.

BACKUP AND RESTORE

Jenkins stores job configurations, credentials, plugins, build history, and system settings inside the Jenkins Home directory.

Regular backups are essential for disaster recovery and system migration.

Backup strategies include file system backups, cloud storage backups, and dedicated backup plugins.

Restoration involves recovering Jenkins Home and reloading configuration data.

PIPELINE BEST PRACTICES

Pipeline definitions should always be stored in version control systems.

Sensitive information such as passwords and API keys should be stored using Jenkins Credentials Manager.

Build stages should be modular and focused on specific tasks.

Parallel execution should be used where possible to reduce build times.

Reusable Shared Libraries should be used for common pipeline logic.

Proper logging, monitoring, and notifications should be configured.

JENKINS AND MAVEN

Maven is one of the most commonly used build tools with Jenkins.

Maven can be installed and configured through Jenkins Global Tool Configuration.

Administrators can define specific Maven versions that will be available to all pipelines.

Pipelines execute Maven commands to compile code, run tests, package applications, and deploy artifacts.

Code Coverage tools such as JaCoCo generate reports showing how much of the source code is tested.

Test Reports generated by Surefire and JUnit plugins help evaluate application quality and identify failed test cases.

JENKINS CI/CD DEPLOYMENT FLOWS

Build triggering is an important part of Jenkins automation.

PollSCM periodically checks source code repositories for changes. If changes are detected, Jenkins starts a build automatically.

Webhooks provide a more efficient mechanism by allowing GitHub or GitLab to notify Jenkins immediately after code changes occur.

Pipeline Libraries allow organizations to share reusable pipeline code across multiple projects. This reduces duplication and simplifies maintenance.

Jenkins Agents can be connected through SSH for remote execution. SFTP can be used to transfer artifacts securely between systems.

Container-based Agents use Docker containers as temporary execution environments, providing consistency and scalability.

DEPLOYMENTS TO SERVERS AND CLOUDS

After successful builds and testing, Jenkins can deploy applications to various targets.

Deployment targets include physical servers, virtual machines, cloud platforms, Kubernetes clusters, and container orchestration systems.

A typical CI/CD workflow is:

Developer writes code → Pushes code to GitHub → Jenkins pipeline starts automatically → Source code is checked out → Application is built → Tests are executed → Artifacts are generated → Docker image is created → Image is pushed to Docker Hub/GHCR → Application is deployed to staging environment → Validation occurs → Production deployment is executed.

This automated workflow reduces manual effort, improves software quality, increases deployment speed, and forms the foundation of modern DevOps practices.
