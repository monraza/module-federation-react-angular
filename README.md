## What is this project about

This project demonstrates the use of Module Federation to integrate Angular, NextJS and ReactJS applications. It consists of NextJS and ReactJS as hosts. Angular and ReactJS as remotes. All federated though webpack to work together seamlessly. 

>Main idea is to provide an example where Angular is used as remote app within a ReactJS/ NextJS host app.

## How to setup the applications

1. Clone the repository:
    ```sh
    git clone https://github.com/monraza/module-federation-react-angular.git
    ```
2. Navigate to each app, install dependencies, and build the app:
    ```sh
    cd angular-remote/
    yarn # OR npm install
    ng build
    ```
    ```sh
    cd react-remote/
    yarn # OR npm install
    yarn build # OR npm run build
    ```
    ```sh
    cd next-host/
    yarn # OR npm install
    yarn build # OR npm run build
    ```
    ```sh
    cd react-host/
    yarn # OR npm install
    yarn build # OR npm run build
    ```

## How to run the applications

1. **Start the Angular remote:**
    ```sh
    cd angular-remote/
    ng serve
    ```
    *App will start running at http://localhost:4201*

2. **Start the React remote:**
    ```sh
    cd react-remote/
    yarn start
    ```
    *App will run at http://localhost:3001*

3. **Start the Next.js host:**
    ```sh
    cd next-host/
    yarn dev
    ```
    *App will run at http://localhost:4200*

4. **Start the React host:**
    ```sh
    cd react-host/
    yarn start
    ```
    *App will run at http://localhost:3003*

## Feedback

For any feedback or issues, please open an issue on the [GitHub repository](https://github.com/monraza/module-federation-react-angular/issues).


## Credits

Inspired from darklimeteam's [repo](https://github.com/darklimeteam/module-federation-angular-react-vue)