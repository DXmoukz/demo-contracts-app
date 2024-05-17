# Demo Contracts App

This is a simple web application for managing legal contracts.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
cd demo-contracts-app
3. Install the dependencies:
dotnet restore
npm install
5. Run the application:
dotnet run

The API will start and be accessible at `https://localhost:7158/swagger/index.html` by default.
The UI will be available at `https://localhost:5173/` for yout to test the CRUD functionalities.

## Testing

To run the tests for this project, use the following command:
dotnet test

This will execute all unit tests in the project and display the results.

## Versions

- .NET SDK: 8.0
- React: 18.2.0
- xUnit: 2.8.0
