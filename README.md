## Installation / Setup

Steps to get the project running locally:

```bash
# Clone the repository
git clone https://github.com/SaharGhadampoorHafezi/azkiservice-code-challenge.git
cd project

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run the development server
npm run dev

# Architecture
This task aimed to implement a gallery or in another hand a feed with modal and toggle theme for light and dark mode.
To achieve it first of all, I decided to move forward with intercepting routes for modals as a results of being mention "The modal should have its own route — meaning if the page is refreshed, it should
navigate to that image’s dedicated page. " and "Closing the modal should bring the user back to the gallery view without a full page
reload. "
Components are only used in gallery page, therefore I put my components directory into my gallery directory.
Second, switching theme was a nice to have feature which I have done my best but I did not achieved and as a lack of time and meet the deadline I skipped it, light and dark theme is provided but the default rendered one is dark and thats the reason why it is in navy blue instead.
Lastly, being type-safety was required which is provided and it was clearly pointed to avoid using design systems such as antd or mui, therefore I decided to use tailwind.
