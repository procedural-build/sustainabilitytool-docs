# Sustainability Tool Documentation

This is where the documentation will go. We can make several pages if needed.

## Create metrics & metric settings

Metrics correspond to the fields reporters will input data against in a project e.g. tonnes of waste recycled.

### Create metrics

It is recommended that users only create metrics at a 'Project level' and then add them to reporting packages using the template functionality. This process ensures data reported by users in their reporting packages correspond to metrics used to generate the indicators displayed in the project-level dashboards.

Users can create metrics at a 'reporting package' level but this approach is not recommended.

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Once in the metrics page, click the ‘Set up Metrics’ drop down and select ‘Add Sustainability Issue’
4. Select the relevant sustainability issue* for your metric and click 'Submit'
5. Click the settings icon on the same row as the sustainability issue you selected in step 4. Click 'Add Metric'
6. Enter the name and definition of the metric, and select the relevant unit*. Click 'Submit'
7. To create another metric, under the same sustainability issue, repeat steps 5 and 6

* contact charles.naud@actionsustainability.com for additional dropdown options for sustainability issues and units.


### Create sub-metrics

Sub-metrics are fields reporters will input data against that will aggregate into metrics. These are often used alongside conversion factors e.g. 'mains energy consumption' and 'mains gas consumption' may be sub-metrics of 'carbon scope 2 emissions' (with the relevant conversion factors applied). 

Note 1: metrics are automatically calculated using by aggregating the data reported against their sub-metrics (using relevant conversion factors if applicable). Reporters can over-ride the automatic calculation.

Note 2: there may be several levels of sub-metrics e.g. 'domestic rail travel passenger miles' may be a sub-metric of 'total rail travel emissions' (with the relevant conversion factors applied), which is in turn a sub-metric of 'scope 3 carbon emissions'

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to create a sub-metric for. Click 'Add Sub-Metric'
4. Enter the name and definition of the metric, and select the relevant unit*. Click 'Submit'
5. To create another metric, repeat steps 3 to 5

* if the unit of a sub-metric is different to that of its parent metric, a warning icon will appear to indicate that a conversion factor is required.


### Conversion factors 

Conversion factors enable to calculate a metric from sub-metrics in a different unit e.g. 'scope 3 carbon emissions' in CO2e from the sub-metric 'non-hazardous waste' in tonnes.

To add or edit multiple conversion factors, please contact charles.naud@actionsustainability.com

#### Add conversion factors

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the sub-metric you wish to apply a conversion factor against. Click 'Add conversion factor'
4. Specify the conversion factor to be applied for calculating one unit of the 'parent' metric from one unit of the sub-metric. Click 'Submit'

#### Edit conversion factors

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the sub-metric you wish to edit the conversion factor. Click 'Edit/show conversion factor'
4. Modify the conversion factor to be applied for calculating one unit of the 'parent' metric from one unit of the sub-metric. Click 'Submit'


### Metric settings
#### Required metrics

Set metrics to 'required' to prevent reporters from submitting their data without inputting data against these fields.

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to make compulsory. Click 'Toggle Required'
4. A red asterisk will indicate that the metric is 'required'

#### Set/edit frequency

By default, reporters will be able to input data against for each metric for every reporting period. You can modify the frequency of a metric to a lesser frequency than the reporting period defined in the project settings e.g. reports are due monthly (this is the reporting period) but the metric 'floor area of project' is only due once.

1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to modify/edit the reporting frequency. Click 'Set Frequency'
4. Complete the fields:
  - due every: enter an integer
  - period: select the relevant 
  - from date: select the second day in the reporting period you wish this metric to be first reported
 5. Click 'Submit'. The frequency of the metric will now display in the metric row
 6. To edit the metric frequency, repeat steps 1 to 5
 
 Note: the frequency a metric should be reported cannot be lesser than the reporting period, which is set in the project settings.
 
 #### Enable document upload
 
 Allow reporters to upload documents to complement the data they input against a metric e.g. waste transfer notes
 
1. Go to your project home
2. In the Admin menu, select 'Metrics'
3. Click the settings icon on the same row as the metric you wish to enable the document upload for. Click 'Enable Document Upload'
4. Enter the Title and a description of the document you expect reporters to upload. Click 'Submit'. An integer in a bracket will indicate the document upload functionality is enabled for that metric
