# masa-exam

**Part I: Theory**
*Please, do NOT use online resources as an assistance for this part of the exam*

**Section A: Please, select the correct answer or the most close to the correct one**

 1. What is a PR?
 - [ ] Program Result: the outcome of a programming effort available for testing
 - [ ] Public Relations: a practice of managing and influencing an organizational info to the public
 - [ ] Pull Request: a request to review the code of a developer prior to merging it main branch
 - [ ] Private Role: A security role that is used in internal system processing

2. What is the role of a service in nodejs server architecture?
 - [ ] Get the request from the router, treat the request parameters, prepare the response of the server to the consumer
 - [ ] Keep state of a specific logic portion of the system, provide processing of the data passed from the different controllers, parse the data and returned the processed response
 - [ ] To be the first element in the system that should service the consumer for his CRUD request to the server
 - [ ] To provide services to the system that do not require a state but should be used across the whole system

3. What is INNER JOIN?
 - [ ] A mechanism to link between to tables in the SQL query to bring data based on the same value in two tables. Allows NULL values on one on the sides of the JOIN
 - [ ] A mechanism to link between to tables in the SQL query to bring data based on the same value in two tables. Only non NULL values are accepted for both sides of the JOIN
 - [ ] A way of executing to `foreach` loops in JS/TS while the internal loop uses values of the external loop
 - [ ] Such a term does not exist

4. What is the code of a server error in HTTP protocol?
 - [ ] 2xx
 - [ ] 3xx
 - [ ] 4xx
 - [ ] 5xx

5. What is the correct flow a story?
 - [ ] Software Detailed Design (SDD), Product design, QA review, UI design, Development, QA testing, Customer review
 - [ ] Customer request, Product design, UI design, SDD, QA review, Development, QA testing, Customer User Acceptance Testing (UAT)
 - [ ] Product design, SDD, QA review, UI design, Development, QA testing, UAT
 - [ ] Customer request, UI design, Product design, UAT, QA review, Development, QA testing

6. Which tool would you use to test a nodejs server?
 - [ ] Browser
 - [ ] Postman
 - [ ] Fiddler
 - [ ] All answers are correct

7. What is the most secure way to connect to SQL Server?
 - [ ] Integrated security
 - [ ] Mixed mode
 - [ ] SQL Server login
 - [ ] Application role

8. What is the correct pair of a protocol and the port for secure HTTP communication?
 - [ ] HTTP:80
 - [ ] HTTPS:80
 - [ ] HTTPS:443
 - [ ] HTTP:443

9. What is a trigger
 - [ ] Trigger is a piece of code executed by the database engine whenever some action is performed on a database object like tables, view, etc.
 - [ ] Trigger is a method that is called JS/TS environment whenever a certain event is fired to complete an asynchronous code execution
 - [ ] Trigger is a processing being performed right after the merge of a code to main branch in order to run a build for the system
 - [ ] Trigger is the mechanism by which the router is sending its data to the controller in nodejs server

10. Why would you use the JWT token? (more than a single answer can be selected)
 - [ ] JWT tokens are encrypted
 - [ ] It's a more secure way of handling authentication and authorization data than username and password
 - [ ] JWT tokens are signed and this signature can be verified uniquely
 - [ ] All answers are correct

**Section B: Please, explain the following terms the best way you can**

11. Authentication & Authorization

12. Stored procedure

13. Git rebase

14. Generics

15. Middleware

 
**Part II: Practice on paper**
*No restrictions on online resources usage*

16. You received a bug stating the following: "Intermittently the following method results in a system getting stuck." You're required to find and fix the problem in this method:

		public  static  addMonths(date: Date, value: number): Date {
		    let expectedMonth: number = date.getMonth() + value;
		    if (expectedMonth  >  12) {
		        expectedMonth = expectedMonth % 12;
		    }
    
		    if (expectedMonth  <  0) {
		        expectedMonth += 12;
	        }
    
		    date.setMonth(date.getMonth() + value);
	        const daysToAdd: number = date.getMonth() >  expectedMonth ? -1 : 1;
	        while (date.getMonth() !== expectedMonth) {
		        date.setDate(date.getDate() + daysToAdd);
		    }
    
		    return  date;
	    }

17. Having the following DB tables diagram:
![](https://github.com/lentyaishe/masa-exam/blob/dev/resources/db-relations.jpg)
