import algoliasearch from "algoliasearch";
import { RequestOptions } from "@algolia/transporter";
import { SearchOptions } from "@algolia/client-search";

export const clientHn = algoliasearch("UJ5WYC0L7X", "8ece23f8eb07cd25d40262a1764599b1");

export async function searchHn(query = '' , requestOptions?: RequestOptions & SearchOptions): Promise<any> {
  return clientHn.initIndex(`Item_production_ordered`).search(query, requestOptions);
}
