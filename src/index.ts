import { GraphQLClient } from "graphql-request";
import { getSdk } from "../graphqlSDKGenerator/graphqlSDKGenerator";
import { errorHandler } from "./errorHandler";

const initializeSDK = () => {
  // we can set custom headers
  const client = new GraphQLClient(
    "https://spacex-production.up.railway.app/",
    {
      headers: {},
    }
  );

  return getSdk(client);
};

const main = async () => {
  const sdkInstance = initializeSDK();
  try {
    const companies = await sdkInstance.companyQuery();

    const user = await sdkInstance.insert_usersMutation({
      objects: { id: 1, name: "test", rocket: "spacex" },
    });

    // uncomment this line to check how error handler works
    // await sdkInstance.usersSubscription();

    console.log(companies, user);
  } catch (error) {
    console.log(errorHandler(error));
  }
};

main();
