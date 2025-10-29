import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

export default function Counter() {
  return (
    <div className="flex items-center gap-3">
      <Button className="size-10" variant="secondary">
        <Minus />
      </Button>
      <p>1</p>
      <Button className="size-10" variant="secondary">
        <Plus />
      </Button>
    </div>
  );
}
