


export type Category = {
    name: string;
  };
  
export type Expert = {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
};
  
  export type Image = {
    uri: string;
  };
  
  
  export type ContentCard = {
    id: string;
    name: string;
    image: Image;
    length: number,
    categories: Category[];
    experts: Expert[];
  };
  