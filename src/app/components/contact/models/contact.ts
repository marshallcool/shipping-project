export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  subject_id: Themes;
}
 export interface Themes {
   id: string;
   theme: string;
 }
