# Exercises

### Questions

> What are the typical Agile team roles and what parts of the development lifecycle is each role responsible for?

A: The typical Agile team roles are: Product Manager, Project Manager, Designer, User Researcher, Team Lead, and Developer.
Product Manager is responsible for the strategy, roadmap, and feature definition of a product.
Project Manager is responsible for the process managements and on-time delivery of one or more product teams. Designer is responsible for the look and feel of a product. User Researcher is responsible for understanding the reasons behind the behavior, wants, needs, and priorities of your users. Team Lead is responsible for the technical management, direction, and quality of project. Developer is responsible for the technical creation, maintenance, and overall integrity of the product.

> Why do we use Kanban boards in Agile development?

A: Because Kanban boards offer a way to visually manage your work, see working progress and understand complex information. Agile teams rely on a Kanban board to stay organized.

> Explain velocity and sprint as if you were teaching another student.

A: Velocity is a metric that predicts how much work an Agile software development team can successfully complete within a sprint. Velocity is the number of points per sprint a development team completes. It is calculated as an average. Velocity is also used to limit the amount of work taken on in further iterations.
Sprint are temporary blocks (from one to four weeks). Each iteration has to provide a functional piece of the product. A sprint cycle can include: Prioritization, Estimation, Planning, Review, and Retrospective meetings.

> What format makes a good user story?

A: A good format for user story is "As a ..., I want ..., so ...".

> What are different estimation methods teams can use? Explain pros and cons of each method. Which method would you prefer?

A: Some estimation methods are: Planning Poker, The Bucket System, Big/Uncertain/Small, Dot Voting, T-Shirt Sizes, Affinity Mapping, Ordering Protocol, Divide until Maximum Size or Less, etc.
I think the estimation method depends on the team and the project but I like T-Shirt Sizes method and Planning Poker.

> Give a real-world example of a development project, and explain the breakdown into epic(s), slices, cards, and tasks.

A:
The wishlist example:
- Epic: "As a customer, I want to be able to have a wishlist so that I came back to buy product later".
- Stories:
  1. "As a customer, I want to can keep a product in my wishlist and them can see it".
  2. "As a customer, I want to can see a product in my wishlist and then can buy it".
- Cards: Create the wishlist
- Tasks:
  1. Add the wishlist button on the product page.
  2. Create a new store in the data base for wishlist items.
  3. Create a new page for the wishlist items for uses.
  4. Add a link in homepage 'see my wishlist'.


> Explain in your own words what a dual-track system is and what advantages it provides.

A: Dual-track agile is a methodology that divides the daily activity of a product team in two tracks: discovery and delivery. Both tracks go in parallel. During discovery the team identifies problems and starts thinking about solutions, designing prototypes and testing them as much as possible.

> Choose one of the following projects and write each card that would be in the epic. Estimate each card. What columns would you need to have on your Kanban board?
 * Finding and leasing a new apartment.
 * Creating a nursery for a new baby.
 * Planning a vacation.

A: Finding and leasing a new apartment.
Cards(Estimation method -> T-shirts size):
  - Set the ideal price(S)
  - Search an appartment(L)
  - Meet the owner(S)
  - View the appartment(M)
  - Sign the contrat/application(S)
  - Pay the rent(L)
Columns:
  - Backlog
  - Committed
  - Blocked
  - In progress
  - In test
  - Deployed
  - Approved

### Project

> Create a Trello board for a Hacker News clone.

A: https://trello.com/b/AWPzLsFT/hacker-news-clone

> Create user stories for each feature.

A:
- As a user, I can see at least 10 latest stories on the homepage which link to the actual stories.
- As a user, I can login or signup for an account on the homepage.
- As a logged in user, I can create a new story.
- As a logged in user, I can edit stories that I've created
- As a logged in user, I can remove individual stories that I've created from the list in my profile.
- As a logged in user, I can vote stories.
- As a logged in user, I can view my user profile which contains the fields I signed up with (except my password, which is hidden).
- As a logged in user, I can change my name and password in my profile.

> Break the work into slices and epics as needed.

> Estimate your cards.

> Explain what estimation methods you used.

A:

Estimation method used is T-Shirt size.(S, M, L, XL);

- Create the list at homepage(M)
- Create the login form page (S)
- Create the register form page(S)
- Create the user page (M)
- Create the new story form page on user page(L)
- Create the edit form page on user page(M)
- Create the delete function on user page(S)
- Add the vote button on the stories list on homepage (S)
- Create the user profile page (L)
- Create the password change form on user page.(M)
