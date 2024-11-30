# Shatbox Client Beta

This repository contains the client-side code for testing the Azure Web PubSub service. The purpose of this project is to demonstrate and test real-time messaging capabilities using Azure Web PubSub.

## Prerequisites

-   Node.js installed on your local machine
-   Access to the [az_webpubsub_server_beta] repository for setting up the local server

## Setup

1. Clone this repository:

    ```sh
    git clone https://github.com/lord-markosa/shatbox_client_beta.git
    cd shatbox_client_beta
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Follow the instructions in the [az_web_pubsub_server_beta](https://github.com/lord-markosa/az_web_pubsub_server_beta) repository to set up and run the local server.

4. Start the client application:
    ```sh
    npm start
    ```

## Usage

Once the client application is running, you can open your browser and navigate to `http://localhost:3000` to start testing the Azure Web PubSub service. You can send and receive messages in real-time using the provided interface.

## Contributing

Feel free to submit issues and pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
