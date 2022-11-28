export interface Node {
  id: string;
  nameWithOwner: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
}

export interface Edge {
  node: Node;
}

export interface PageInfo {
  startCursor: string;
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Search {
  edges: Edge[];
  pageInfo: PageInfo;
}

export interface Data {
  search: Search;
}
