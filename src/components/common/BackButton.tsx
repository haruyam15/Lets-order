import { ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface BackButtonProps {
  path: string;
  title?: string;
}

export default function BackButton({ path, title }: BackButtonProps) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center bg-white h-15 md:h-17 shrink-0">
      <NavLink to={path} className="absolute left-3 size-10 md:size-15">
        <ChevronLeft className="md:size-15 size-10" />
      </NavLink>
      {title && <p>{title}</p>}
    </div>
  );
}
