
# Sustainability Tool Documentation

Sustainability Tool user guide.


## Business units

Company admin users can create business units to manage sustainability performance for a subset of their organisation’s operations.
A company account can have, directly below it, multiple business units and projects, which all contribute to the data in the company dashboard. In turn, business units can have other business units and projects within them. These will contribute to the data in the ‘parent’ business unit dashboard. Business unit dashboards only show data from other business units and projects that are below them.
As such, users can use this functionality to manage performance for groups of projects at multiple levels within their organisation.


### Create business unit 

1. Go to the company (or business unit) dashboard where the new business unit will feed into
2. In the Admin menu, select ‘Settings’
3. Scroll down to the Business Units table
4. Click ‘Add a Business Unit’ found on the top-right of the table
5. Complete the relevant details and ‘Submit’
6. To create additional business units, repeat steps 1 to 5

To create a business unit within an existing business unit, go to the existing business unit’s dashboard and repeat steps 2 to 5.


### Edit a business unit name

1. Go to the business unit dashboard, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select ‘Settings’
3. Under Corporate details, edit the Name field
4. Click ‘Submit’


## Projects

\[Enter description for project\]


### Create project

1. Go to the company (or business unit) dashboard where the new project unit will feed into
2. In the Admin menu, select ‘Settings’
3. Scroll down to the 'Projects at this level' table and click 'Add a Project' found on the top-right of the table
4. Enter the project name and address if relevant
5. Define the project settings:
  \- Reporting from: defines the beginning of the first reporting period; when reporting should commence
  \- Reporting to: defines the month after which reporting will cease e.g. by selecting the 10th December 2019, you are indicating that reporting should end in November 2019
  \- Every & Reporting Increments: define the frequency of the reporting periods e.g. "every 1 months" will generate a project with monthly reporting periods
  6. If using a template for the metrics and indicator settings, select appropriate template otherwise leave on "None"
  7. Click "Submit"
  

### Edit project setting: name

1. Go to the project dashboard, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select ‘Settings’
3. Under Project details, edit the Name field
4. Click 'Submit'


### Edit project setting: reporting frequency

1. Go to the project dashboard, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select ‘Settings’
3. Under the Reporting Periods table, click on 'Eidt Reporting Duration'
4. Modify the Every and Reporting Increments fields
5. Click ‘Submit’


### Edit project setting: reporting start date

1. Go to the project dashboard, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select ‘Settings’
3. Under the Reporting Periods table, scroll down to the earliest reporting period with a 0 in the 'Num Reports' column
4. Click on the settings icon and delete
5. Repeat steps 3 and 4 until you the earliest reporting period corresponds to your desired reporting start data


### Edit project setting: reporting end date

1. Go to the project dashboard, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select ‘Settings’
3. Under the Reporting Periods table, click on 'Edit Reporting Duration'
4. Modify the Reporting to field
5. Click ‘Submit’


## Create metrics & metric settings

Metrics correspond to the fields reporters will input data against in a project e.g. tonnes of waste recycled.


#### Create metrics

It is recommended that users only create metrics at a 'Project level' and then add them to reporting packages using the template functionality. This process ensures data reported by users in their reporting packages correspond to metrics used to generate the indicators displayed in the project-level dashboards.

Users can create metrics at a 'reporting package' level but this approach is not recommended.

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Once in the metrics page, click the ‘Set up Metrics’ drop down and select ‘Add Sustainability Issue’
4. Select the relevant sustainability issue* for your metric and click 'Submit'
5. Click the settings icon on the same row as the sustainability issue you selected in step 4. Click 'Add Metric'
6. Enter the name and definition of the metric, and select the relevant unit*. Click 'Submit'
7. To create another metric, under the same sustainability issue, repeat steps 5 and 6

\* contact charles.naud@actionsustainability.com for additional dropdown options for sustainability issues and units.


#### Create sub-metrics

Sub-metrics are fields reporters will input data against that will aggregate into metrics. These are often used alongside conversion factors e.g. 'mains energy consumption' and 'mains gas consumption' may be sub-metrics of 'carbon scope 2 emissions' (with the relevant conversion factors applied). 

Note 1: metrics are automatically calculated using by aggregating the data reported against their sub-metrics (using relevant conversion factors if applicable). Reporters can over-ride the automatic calculation.

Note 2: there may be several levels of sub-metrics e.g. 'domestic rail travel passenger miles' may be a sub-metric of 'total rail travel emissions' (with the relevant conversion factors applied), which is in turn a sub-metric of 'scope 3 carbon emissions'

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to create a sub-metric for. Click 'Add Sub-Metric'
4. Enter the name and definition of the metric, and select the relevant unit*. Click 'Submit'
5. To create another metric, repeat steps 3 to 5

\* if the unit of a sub-metric is different to that of its parent metric, a warning icon will appear to indicate that a conversion factor is required.


#### Conversion factors 

Conversion factors enable to calculate a metric from sub-metrics in a different unit e.g. 'scope 3 carbon emissions' in CO2e from the sub-metric 'non-hazardous waste' in tonnes.

To add or edit multiple conversion factors, please contact charles.naud@actionsustainability.com


##### Add conversion factors

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the sub-metric you wish to apply a conversion factor against. Click 'Add conversion factor'
4. Specify the conversion factor to be applied for calculating one unit of the 'parent' metric from one unit of the sub-metric. Click 'Submit'


##### Edit conversion factors

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the sub-metric you wish to edit the conversion factor. Click 'Edit/show conversion factor'
4. Modify the conversion factor to be applied for calculating one unit of the 'parent' metric from one unit of the sub-metric. Click 'Submit'


#### Metric settings

##### Required metrics

Set metrics to 'required' to prevent reporters from submitting their data without inputting data against these fields.

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to make compulsory. Click 'Toggle Required'
4. A red asterisk will indicate that the metric is 'required'


##### Set/edit frequency

By default, reporters will be able to input data against for each metric for every reporting period. You can modify the frequency of a metric to a lesser frequency than the reporting period defined in the project settings e.g. reports are due monthly (this is the reporting period) but the metric 'floor area of project' is only due once.

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to modify/edit the reporting frequency. Click 'Set Frequency'
4. Complete the fields:
  \- due every: enter an integer
  \- period: select the relevant 
  \- from date: select the second day in the reporting period you wish this metric to be first reported
  
 5. Click 'Submit'. The frequency of the metric will now display in the metric row
 6. To edit the metric frequency, repeat steps 1 to 5 
 
 Note: the frequency a metric should be reported cannot be lesser than the reporting period, which is set in the project settings.
 
 
 ##### Enable document upload
 
 Allow reporters to upload documents to complement the data they input against a metric e.g. waste transfer notes
 
1. Go to your project home
2. In the Admin menu, select 'Metrics' 
3. Click the settings icon on the same row as the metric you wish to enable the document upload for. Click 'Enable Document Upload'
4. Enter the Title and a description of the document you expect reporters to upload. Click 'Submit'. An integer in a bracket will indicate the document upload functionality is enabled for that metric


## Reporting packages

\[Enter description for reporting packages\]


### Create reporting packages

1. Go to the project dashboard, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select ‘Settings’
3. Under the Reporting Packages in Project table, click on 'Add a Reporting Package'
4. Click 'Submit'
5. To create additional reporting packages within a project, repeat steps 1 to 4


### Set up or edit reporting package settings

1. Go to the reporting package, by clicking on the relevant link in the left-hand menu
2. In the Admin menu, select 'Settings'
3. Complete the relevant details:
 \- Set the current Reporting Period: select the first reporting period
 \- Due date: select the date the first reporting period is due. Subsequent months will use the corresponding due date
 \- Appoint report for this package: use the dropdown to determine who is responsible for inputting the data and submitting the reports
4. Click 'Submit'
5. To create additional reporting packages within a project, repeat steps 1 to 4


### Set up reporting package metrics

To draft:
\-	Add user
\-	Creating/editing indicators
\-	Setting/editing targets and thresholds
\-	Reporting
\-	Approving/rejecting reports



