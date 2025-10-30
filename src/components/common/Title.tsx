import BackButton from '@/components/common/BackButton';

type TitleProps =
  | {
      backBtn: true;
      path: string;
      text?: string;
    }
  | {
      backBtn: false;
      path?: string;
      text?: string;
    };

export default function Title({ path, text, backBtn }: TitleProps) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center bg-white h-15 md:h-17 shrink-0">
      {backBtn && <BackButton path={path} />}

      {text && <p>{text}</p>}
    </div>
  );
}
