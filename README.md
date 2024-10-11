# Documentation

## What is this application about

This project demonstrates the use of Module Federation to integrate Angular, NextJS and React applications. It consists of NextJS and ReactJS as hosts. Angular and ReactJS as remotes. All federated though webpack to work together seamlessly.

## How to setup the application

1. Clone the repository:
    ```sh
    git clone https://github.com/monraza/module-federation-react-angular.git
    ```
2. Navigate to each app and install dependencies:
    ```sh
    cd angular-remote/
    yarn install

    cd next-host/
    yarn install

    cd react-host/
    yarn install

    cd react-remote/
    yarn install
    ```

## How to run the applications

1. Start the Angular shell:
    ```sh
    cd angular-remote/
    ng serve
    ```

2. Start the Next.js shell:
    ```sh
    cd next-host/
    yarn dev
    ```

3. Start the React shell:
    ```sh
    cd react-host/
    yarn start

4. Start the React remote:
    ```sh
    cd react-remote/
    yarn start

    ```

## Feedback

For any feedback or issues, please open an issue on the [GitHub repository](https://github.com/your-repo/module-federation-angular-react/issues).


## Credits

Inpired from [here] (https://github.com/darklimeteam/module-federation-angular-react-vue)