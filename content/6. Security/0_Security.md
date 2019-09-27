# Security Information

This is a brief summary outlining the security procedures and policies in place on the Sustainability Tool system.

This document is not a comprehensive analysis of all security measures. If more detailed information is required on any particular aspects of the system please contact us and we can provide it.

## Overview

The Sustainability Tool system is a cloud-based reporting and document-management system. A major advantage of cloud-based systems is improved data security and redundancy as well as ongoing active management and security upgrades. In summary, the system consists of three parts:

1. Frontend Javascript bundles that comprise the Single Page Application (SPA) which run on the clients browser - this SPA executes commands to the backend server via the API using JST based authentication.
2. A backend application server for handling API requests and responses as well as all other server-side management of state and tasks.
3. Upload and storage of physical documents to the site are handled by the Amazon AWS S3 cloud storage system.

Just for comparison, this is a very similar architecture to many sites that one might already be familiar with including: Amazon; Dropbox; The Washington Post; Google; and others.

## Hosting and regions

The Sustainability Tool use Amazon AWS stack for all services related to the site.  The Tool is region-based with servers based in regions appropriate in order to meet the clients data sovereignty requirements.  Currently we have servers operating in London and Sydney.  However new regions can be added as required based on client demand.

## Robust micro-services architecture

The backend architecture is based on a robust cloud-native microservices architecture based on containers.  These services are constantly monitored and restarted or scaled as required to ensure robust site performance and uptime.


## QA Processes

The developers of the Sustainability Tool maintain industry best-practice with regards to QA practices on the codebase - in-line wit their Continuous Integration (CI) and Continuous Delivery (CD) practices. This ensures that updates, features and important security patches can be rolled out quickly and efficiently - while maintaining integrity and quality of the codebase.


## Testing

Automated testing is carried out in accordance with our developers's CI/CD practices as noted above.  Detailed information on the latest results from these tests may be provided on request.  Tests that are carried out include:

* Standard suite of penetration tests
* Unit testing of the codebase
* End-to-end tests

## Data transfer security and encryption

All data transfer is encrypted with industry-standard HTTPS. Right-clicking on the green lock-symbol in the URL bar in your browser should confirm this with a message stating:
> “The connection to this site is encrypted and authenticated using a strong protocol (TLS 1.2), a strong key exchange (ECDHE_RSA), and a strong cipher (AES_128_GCM).”;
> “The connection to this site is using a valid, trusted server certificate.”; and
> “All resources on this page are served securely”.

## Data Redundancy and Backups

Rolling backups of the servers and site data are carried out in order to comply with the following objectives:

* **Recovery Point Objectives (RPO) of 1 day**:  RPO is the maximum acceptable amount of data loss measured in time. It is the age of the files or data in backup storage required to resume normal operations if a computer system or network failure occurs.
* **Recovery Time Objectives (RTO) of 1 hour**: RTO is the minimum estimated time required to resume normal operations after a disaster.

For file-based storage, the standard redundancy policy used means that the S3-based file storage is designed to sustain the concurrent loss of data in two facilities. Thus data is maintained and synchronized in multiple physical locations to achieve very high levels of data redundancy and durability - in accordance with AWS standard policies and service level agreements - which are very high.

**Note**: it is possible to increase data redundancy on request. However this very high level of redundancy and durability is sufficient for most purposes.

## Server downtime and monitoring policy

Due to our redundancy and backup policy the risks of any data loss are small in the event of a complete failure of the front-end server. As the data and databases are backed up in multiple different locations we can bring the server back up without data loss.

While the physical data and database might be backed-up and secure, we none the less go to great length to minimise downtime of the server. Over the past 5 years that the ODS website has been running we have logged a total of about 12-hours downtime. This is an availability of greater than 99.97%.


## Data access, transparency and inter-operability

We make every effort to ensure that data is always easy to access and retrieve from the system. Thus we maintain a high level of transparency and data-access using open data exchange formats. At any time the client can export or “dump” their database as well as complete document cache to a common open-format. This allows the data to be backed-up or transferred to another database, storage system or reporting-system at any time.


## Disaster Recovery Manual

As part of our own QA system we have documented plans for how to deal with and recover from various “what if” disaster scenarios. Our policy for security and data redundancy has been borne out of considering the risks and consequences of various scenarios and planning for those in advance. This procedures and recovery manual is reviewed and updated periodically.
