
export interface EventDetail {
  id: string;
  name: string;
  type: 'technical' | 'non-technical' | 'special';
  description: string;
  rules?: string[];
  teamSize?: string;
  icon: string;
}

export interface Coordinator {
  name: string;
  phone: string;
  role: 'Faculty' | 'Student';
}

export interface ImportantDate {
  label: string;
  date: string;
  isPassed?: boolean;
}
