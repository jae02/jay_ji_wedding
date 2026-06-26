"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Account {
  bank: string;
  number: string;
  name: string;
}

interface AccountGroup {
  title: string;
  accounts: Account[];
}

function AccountAccordion({ group }: { group: AccountGroup }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="mb-4 bg-white rounded-lg shadow-sm border border-wedding-beige overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-wedding-bg hover:bg-wedding-beige/50 transition-colors"
      >
        <span className="font-serif text-wedding-text">{group.title}</span>
        <ChevronDown 
          className={cn("w-5 h-5 text-wedding-pink-dark transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>
      
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 space-y-4 border-t border-wedding-beige">
          {group.accounts.map((account, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-wedding-text/80">{account.bank}</span>
                <button
                  onClick={() => handleCopy(account.number, idx)}
                  className="flex items-center gap-1 text-xs text-wedding-text/60 bg-wedding-beige px-2 py-1 rounded hover:bg-wedding-pink-dark hover:text-white transition-colors"
                >
                  {copiedIndex === idx ? (
                    <><Check className="w-3 h-3" /> 복사됨</>
                  ) : (
                    <><Copy className="w-3 h-3" /> 복사하기</>
                  )}
                </button>
              </div>
              <div className="flex justify-between items-center text-sm text-wedding-text/60">
                <span>{account.number}</span>
                <span>예금주: {account.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AccountInfo() {
  // TODO: 실제 계좌 정보로 수정해주세요.
  const groomAccounts: AccountGroup = {
    title: "신랑측 계좌번호",
    accounts: [
      { bank: "국민은행", number: "123456-78-901234", name: "임재영" },
      { bank: "신한은행", number: "110-123-456789", name: "임용석" },
    ],
  };

  const brideAccounts: AccountGroup = {
    title: "신부측 계좌번호",
    accounts: [
      { bank: "우리은행", number: "1002-123-456789", name: "유지영" },
      { bank: "하나은행", number: "123-456789-01234", name: "모정희" },
    ],
  };

  return (
    <section className="py-24 px-6 bg-wedding-beige">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-serif text-wedding-pink-dark tracking-widest mb-2">
              ACCOUNT
            </h2>
            <p className="text-wedding-text/60 text-sm">마음 전하실 곳</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-wedding-text/80 mb-8 leading-relaxed font-serif">
            참석이 어려우신 분들을 위해<br />
            계좌번호를 기재하였습니다.<br />
            너른 양해 부탁드립니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-4">
            <AccountAccordion group={groomAccounts} />
            <AccountAccordion group={brideAccounts} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
