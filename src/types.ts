
export interface IRobot {
    name: string,
    email: string,
    id: number
}

export interface IRobots {
    robots: IRobot[]
}


interface IbasicAction {
    type: string;
    payload: string;
  }

export interface Idispatch {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => IbasicAction;
    onRequestRobot: () => Promise<
      | {
          type: string;
          payload: any;
        }
      | undefined
    >;
  }

export interface ImainProps extends IRobots, Idispatch {
    //onRequestRobot: any,
    searchField: string,
    //onSearchChange: any,
    isPending: boolean,
    error?: string
}


/**
 * reducers.ts
 */

export interface IinitalStateSearch {
    searchField: string;
}

export interface IinitialStateRobots {
    isPending: boolean;
    robots: [];
    error: string;
};

export interface IsearchRobotAction {
    type: string;
    payload: string;
}

export interface IrequestRobotsAction {
    type: string;
    payload?: IRobots;
}