import { Button } from '@/components/ui/button';

interface FixedButtonProps {
  children: React.ReactNode;
}

export default function FixedButton({ children }: FixedButtonProps) {
  return (
    <div className="sticky bottom-0 w-full p-5">
      <Button className="w-full py-6 text-lg">{children}</Button>
    </div>
  );
}
