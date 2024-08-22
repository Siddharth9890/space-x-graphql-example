import { GraphQLClient } from "graphql-request";
import { getSdk } from "../graphqlSDKGenerator/graphqlSDKGenerator";

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
  const companies = await sdkInstance.companyQuery();

  const user = await sdkInstance.insert_usersMutation({
    objects: { id: 1, name: "test", rocket: "spacex" },
  });

  console.log(companies, user);
};

main();
