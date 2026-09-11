"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Stamp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import ContainerNew from "./layouts/container-new";
import { Modal } from "@/app/_components/ui/modal";

const STORIES = [
  {
    name: "Isanka Edirisooriya",
    detail: "University of Essex, UK",
    successStory:
      "I'm Isanka Edirisooriya, student of University of Essex UK. I got this opportunity through GFE Consultancy. There was a consultant who guided me throughout this process. I got to know about GFE Consultancy through Facebook. I visited the place and they guided me throughout my SOP's until the VISA Process in which they did VISA's for my whole family of 4 members. We got our VISA's success within the specific period of time without any delay. So GFE Consultancy guided me very much and I highly recommend this place for you all.",
  },
  {
    name: "Janitha Dineshan",
    detail: "UK visa, family of 4",
    successStory:
      "Hi! Good Afternoon! My name is Janitha Dineshan and this is my husband Manoharan Dineshan. We got the VISA to the UK. අපි GFE Consultation එකෙන් තමයි කරේ. එයාලා හරියටම documents arrange කරලා, අපිට හරියටම එකේ ඉදලා පටන් ගන්න වෙලාව ඔක්කොම හරියටම කරලා, අපිට calls ඔක්කොම support කරලා, අපිට හොදට කියලා දුන්නා. ඒක නිසා තමයි අපි VISA වලට Monday දාලා Saturday ගත්තේ. එයාලා හරියටම අපිට ඔක්කොම කියලා දුන්නා. ඒක නිසා තමයි අපි ඉක්මනට VISA එක ගත්තේ. මේ වගේ සල්ලි මුකුත් ගන්නේ නැතුව, කවුරුත් මේ වගේ කරලා දෙන්නේ නැහැ. මේ Agency එකට ඔයාලත් අවොත්, ඔයාලට පරිස්සමින්, ඉක්මනට VISA ගන්න පුළුවන්. අපි වගේ ඔයාලටත් UK යන්න පුළුවන්. නැත්නම් වෙන countries වලටත් VISA එයාලා කරලා දෙනවා.",
  },
];

export default function SuccessStoriesText() {
  const modalRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;

  const onPrevClick = () => {
    setDirection(-1);
    setSelected((state) => (state === 0 ? STORIES.length - 1 : state - 1));
  };

  const onNextClick = () => {
    setDirection(1);
    setSelected((state) => (state === STORIES.length - 1 ? 0 : state + 1));
  };

  const onOpenModal = () => {
    (modalRef.current as unknown as HTMLDialogElement | null)?.showModal();
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <section className="bg-exam-ink py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-14">
          <p className="slip-mono text-exam-gold text-xs uppercase tracking-wider mb-3">Success stories</p>
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
            Real students, real outcomes.
          </h2>
        </div>

        <div className="relative bg-slip-surface border border-slip-rule rounded-sm p-8 sm:p-14 max-w-4xl mx-auto overflow-hidden shadow-[var(--shadow-slip-card)]">
          <Quote className="absolute top-6 right-6 text-exam-ink/10" size={64} strokeWidth={1} />

          <AnimatePresence>
            <motion.div
              key={`stamp-${selected}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -18 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -top-4 -right-3 sm:-right-4 z-10"
            >
              <div className="flex items-center gap-1.5 bg-stamp-red text-slip-surface font-slip-display font-bold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-[var(--shadow-slip-card)]">
                <Stamp className="w-3.5 h-3.5" />
                Verified Outcome
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selected}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="slip-mono text-exam-navy text-xs uppercase tracking-wide mb-2">
                {`File ${String(selected + 1).padStart(2, "0")} · ${STORIES[selected].detail}`}
              </p>
              <p className="font-slip-display font-bold text-exam-ink text-xl mb-6">{STORIES[selected].name}</p>
              <p className="font-body text-exam-ink/80 leading-relaxed multi-line-truncate">
                {STORIES[selected].successStory}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={onOpenModal}
              className="font-slip-display font-bold text-exam-navy hover:text-exam-navy-deep text-sm uppercase tracking-wide transition-colors cursor-pointer"
            >
              Read full story
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <span className="slip-mono text-slip-mist text-xs">
                {String(selected + 1).padStart(2, "0")} / {String(STORIES.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous story"
                  onClick={onPrevClick}
                  className="w-10 h-10 rounded-full border border-exam-ink/20 flex items-center justify-center text-exam-ink hover:bg-exam-ink hover:text-gazette hover:border-exam-ink transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next story"
                  onClick={onNextClick}
                  className="w-10 h-10 rounded-full border border-exam-ink/20 flex items-center justify-center text-exam-ink hover:bg-exam-ink hover:text-gazette hover:border-exam-ink transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerNew>

      <Modal
        dialogWrapperClassName="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-slip-surface border border-slip-rule rounded-sm text-exam-ink"
        ref={modalRef}
      >
        <div className="max-h-[80vh] overflow-y-auto">
          <p className="slip-mono text-exam-navy text-xs uppercase tracking-wide mb-2">
            {`File ${String(selected + 1).padStart(2, "0")} · ${STORIES[selected].detail}`}
          </p>
          <p className="font-slip-display font-bold text-exam-ink text-xl mb-5">{STORIES[selected].name}</p>
          <p className="font-body text-exam-ink/80 leading-relaxed">{STORIES[selected].successStory}</p>
        </div>
      </Modal>
    </section>
  );
}
