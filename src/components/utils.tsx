
export const convertToNumberArray = (arg: string): number[] => 
    arg.split(",").map((strNum) => Number(strNum))
