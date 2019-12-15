(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"sql-express-no-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-express-no-agent"}},[e._v("#")]),e._v(" SQL Express = No Agent")]),e._v(" "),t("p",[e._v("One of the biggest feature limitations of SQL Server Express is the exclusion of\nthe SQL Agent. Not only does SQL Agent work wonderfully for managing ETL, SSIS,\nand maintenance jobs across one or more servers, but it also functions as a general\njob scheduler. It can execute any PowerShell or command prompt script to take care of\nany number of processes or jobs that may be 100% external to SQL Server.")]),e._v(" "),t("p",[e._v("Without a SQL Agent, the default option for "),t("router-link",{attrs:{to:"/best-practices/sql-server-express-backups/"}},[e._v("managing backups")]),e._v(" and "),t("router-link",{attrs:{to:"/best-practices/sql-server-express-maintenance/"}},[e._v("maintenance scripts")]),e._v(" on SQL Server Express is not an option. Luckily, one of the next best alternatives is free, included in Windows,\nand takes very little time to configure. Enter Windows Task Scheduler!")],1),e._v(" "),t("h2",{attrs:{id:"windows-task-scheduler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-task-scheduler"}},[e._v("#")]),e._v(" Windows Task Scheduler")]),e._v(" "),t("p",[e._v("To utilize the task scheduler, a task must be created that will execute a batch script containing the code to run on the SQL Express Instance. In this eample, it will be a maintenance job\nthat will be run weekly to ensure indexes are defragmented on user databases. The\nsettings for the maintenance job will be copied directly from Ola's scripts to replicate\nthe parameters that are used to create a job when the SQL Agent is available.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#task-scheduler-gui"}},[e._v("Creating a Task via GUI")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#task-scheduler-command-line"}},[e._v("Creating a Task via Command Line")])])]),e._v(" "),t("h3",{attrs:{id:"task-scheduler-gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-scheduler-gui"}},[e._v("#")]),e._v(" Task Scheduler GUI")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install "),t("a",{attrs:{href:"https://ola.hallengren.com/sql-server-index-and-statistics-maintenance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ola Hallengren's maintenance scripts"),t("OutboundLink")],1),e._v(" if they haven't been already. "),t("em",[e._v("There may be a message about SQLServerAgent not running when installing these scripts. That is expected since the agent isn't available, but will not affect the installation.")])])]),e._v(" "),t("li",[t("p",[e._v("Create a "),t("code",[e._v(".bat")]),e._v(" file for the sqlcmd script that will run the maintenance stored procedure:")]),e._v(" "),t("div",{staticClass:"language-batch line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sqlcmd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-E")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-S")]),e._v(" .\\SQLEXPRESS "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-d")]),e._v(" master "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-Q")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"EXECUTE [dbo].[IndexOptimize] @Databases = 'USER_DATABASES', @LogToTable = 'Y'\"")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-b")]),e._v(" ")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v('Search for "Task Scheduler" from the start menu to open the scheduler')])]),e._v(" "),t("li",[t("p",[e._v('Right click "Task Scheduler" and select "Create Basic Task"')]),e._v(" "),t("p",[t("img",{attrs:{src:"/task_scheduler_1.PNG",alt:"Windows Task Scheduler"}})])]),e._v(" "),t("li",[t("p",[e._v("Input a name and description for the task.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/task_scheduler_2.PNG",alt:"Windows Task Scheduler"}})])]),e._v(" "),t("li",[t("p",[e._v("Pick a weekly schedule or one that works based on the database's usage.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/task_scheduler_3.PNG",alt:"Windows Task Scheduler"}})])]),e._v(" "),t("li",[t("p",[e._v('Choose "Start a Program" as the action type.')])]),e._v(" "),t("li",[t("p",[e._v("Insert the "),t("code",[e._v(".bat")]),e._v(" file created earlier.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/task_scheduler_4.PNG",alt:"Windows Task Scheduler"}})])]),e._v(" "),t("li",[t("p",[e._v("Test run the job to ensure it is working as expected.")])])]),e._v(" "),t("p",[e._v("Repeat the above steps to handle database backups, DBCC checks, and other database maintenance as needed.")]),e._v(" "),t("h3",{attrs:{id:"task-scheduler-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task-scheduler-command-line"}},[e._v("#")]),e._v(" Task Scheduler Command Line")]),e._v(" "),t("p",[e._v("Using Windows Task Scheduler from the command line involves running "),t("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/bb736357(v=vs.85).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("schtasks.exe"),t("OutboundLink")],1),e._v(" to schedule and configure tasks.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install "),t("a",{attrs:{href:"https://ola.hallengren.com/sql-server-index-and-statistics-maintenance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ola Hallengren's maintenance scripts"),t("OutboundLink")],1),e._v(" if they haven't been already. "),t("em",[e._v("There may be a message about SQLServerAgent not running when installing these scripts. That is expected since the agent isn't available, but will not affect the installation.")])])]),e._v(" "),t("li",[t("p",[e._v("Create a "),t("code",[e._v(".bat")]),e._v(" file for the sqlcmd script that will run the maintenance stored procedure:")]),e._v(" "),t("div",{staticClass:"language-batch line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sqlcmd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-E")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-S")]),e._v(" .\\SQLEXPRESS "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-d")]),e._v(" master "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-Q")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"EXECUTE [dbo].[IndexOptimize] @Databases = 'USER_DATABASES', @LogToTable = 'Y'\"")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("-b")]),e._v(" ")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Replace the placeholder values and run the script below to create a scheduled task:")])])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("RU")]),e._v(" - Windows user the task will run as.")]),e._v(" "),t("li",[t("code",[e._v("RP")]),e._v(" - Password for the RU.")]),e._v(" "),t("li",[t("code",[e._v("SC")]),e._v(" - Run schedule (MINUTE, HOURLY, DAILY, WEEKLY, MONTHLY, ONCE, ONLOGON, ONIDLE, or ONEVENT.)")]),e._v(" "),t("li",[t("code",[e._v("TN")]),e._v(" - Task Name.")]),e._v(" "),t("li",[t("code",[e._v("TR")]),e._v(" - A value that specifies the path and file name of the task to be run.")]),e._v(" "),t("li",[t("code",[e._v("MO")]),e._v(" - Modifier to add more fine grained control over the schedule:\n* MINUTE: 1 - 1439 minutes.\n* DAILY: 1 - 365 days.\n* WEEKLY: weeks 1 - 52.\n* MONTHLY: 1 - 12, or FIRST, SECOND, THIRD, FOURTH, LAST, and LASTDAY.\n* ONEVENT: XPath event query string.")]),e._v(" "),t("li",[t("code",[e._v("D")]),e._v(" - A value that specifies the day of the week to run the task. Valid values are: MON, TUE, WED, THU, FRI, SAT, SUN and for MONTHLY schedules 1 - 31 (days of the month). The wildcard character ( * ) specifies all days.")]),e._v(" "),t("li",[t("code",[e._v("M")]),e._v(" - A value that specifies months of the year. Defaults to the first day of the month. Valid values are: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, and DEC. The wildcard character ( * ) specifies all months."),t("div",{staticClass:"language-batch line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("schtasks")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/Create")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/RU")]),e._v(" MyLogin "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/RP")]),e._v(" MyPassword "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/SC")]),e._v(" WEEKLY ["),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/MO")]),e._v(" modifier] ["),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/D")]),e._v(" day] ["),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/M")]),e._v(" months] "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/TN")]),e._v(" SQLExpressMaintenance "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[e._v("/TR")]),e._v(" C:\\express_maintenance.bat")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])])]),e._v(" "),t("p",[e._v("Repeat the above steps to handle database backups, DBCC checks, and other database maintenance as needed.")]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://ola.hallengren.com/frequently-asked-questions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ on Ola Hallengren's Scripts"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Microsoft KB on "),t("a",{attrs:{href:"https://support.microsoft.com/en-us/help/2019698/how-to-schedule-and-automate-backups-of-sql-server-databases-in-sql-se",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Schedule and Automate Backups of SQL Server Databases in SQL Server Express"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Microsoft Documentation on "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[e._v("sqlcmd"),t("OutboundLink")],1)])]),e._v(" "),t("br"),e._v(" "),t("br")])}),[],!1,null,null,null);a.default=r.exports}}]);