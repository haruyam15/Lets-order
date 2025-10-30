import { ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface BackButtonProps {
  path: string;
}

export default function BackButton({ path }: BackButtonProps) {
  return (
    <NavLink to={path} className="absolute left-3 size-10 md:size-15">
      <ChevronLeft className="md:size-15 size-10" />
    </NavLink>
  );
}
