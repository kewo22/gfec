"use client";

import { useState, useEffect, useRef } from "react";
import Container from "./layouts/container";
import { Typography } from "../../_components/ui/typography";
import SectionTitle from "./section-title";
import Button from "@/app/_components/ui/button";
import { Modal } from "@/app/_components/ui/modal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SuccessStoriesText() {
  const modalRef = useRef(null);

  const data: any[] | null = [
    {
      name: "Isanka Edirisooriya",
      uni: "Student",
      successStory:
        "I'm Isanka Edirisooriya, student of University of Essex UK. I got this opportunity through GFE Consultancy. There was a consultant who guided me throughout this process. I got to know about GFE Consultancy through Facebook. I visited the place and they guided me throughout my SOP's until the VISA Process in which they did VISA's for my whole family of 4 members. We got our VISA's success within the specific period of time without any delay. So GFE Consultancy guided me very much and I highly recommend this place for you all.",
    },
    {
      name: "Janitha Dineshan",
      uni: "Student",
      successStory:
        "Hi! Good Afternoon! My name is Janitha Dineshan and this is my husband Manoharan Dineshan. We got the VISA to the UK. අපි GFE Consultation එකෙන් තමයි කරේ. එයාලා හරියටම documents arrange කරලා, අපිට හරියටම එකේ ඉදලා පටන් ගන්න වෙලාව ඔක්කොම හරියටම කරලා, අපිට calls ඔක්කොම support කරලා, අපිට හොදට කියලා දුන්නා. ඒක නිසා තමයි අපි VISA වලට Monday දාලා Saturday ගත්තේ. එයාලා හරියටම අපිට ඔක්කොම කියලා දුන්නා. ඒක නිසා තමයි අපි ඉක්මනට VISA එක ගත්තේ. මේ වගේ සල්ලි මුකුත් ගන්නේ නැතුව, කවුරුත් මේ වගේ කරලා දෙන්නේ නැහැ. මේ Agency එකට ඔයාලත් අවොත්, ඔයාලට පරිස්සමින්, ඉක්මනට VISA ගන්න පුළුවන්. අපි වගේ ඔයාලටත් UK යන්න පුළුවන්. නැත්නම් වෙන countries වලටත් VISA එයාලා කරලා දෙනවා.",
    },
  ];

  const [selectedSuccessStory, setSelectedSuccessStory] = useState(0);
  const [direction, setDirection] = useState(0);

  const onPrevClick = () => {
    setDirection(-1);
    setSelectedSuccessStory((state) =>
      state === 0 ? data!.length - 1 : state - 1
    );
  };

  const onNextClick = () => {
    setDirection(1);
    setSelectedSuccessStory((state) =>
      state === data!.length - 1 ? 0 : state + 1
    );
  };

  const onOpenModel = () => {
    if (modalRef && modalRef.current) {
      (modalRef.current as HTMLDialogElement).showModal();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <Container className="mx-0 lg:mx-auto py-20">
      <SectionTitle title="Our Success Stories" />

      <div className="relative border-4 border-secondary mx-5 p-12 sm:p-20 overflow-hidden rounded-4xl">
        {/* <div className="absolute -top-[26px] left-[5%] bg-slate-100 px-1 transform-[rotateX(180deg)_rotateY(180deg)]">
          <Quote className="text-secondary size-14" />
        </div>
        <div className="absolute -bottom-[28px] right-[5%] bg-slate-100 px-1">
          <Quote className="text-secondary size-14" />
        </div> */}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedSuccessStory}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 place-items-center sm:place-items-start sm:items-center">
              <div>
                <Typography
                  className="text-center sm:text-left"
                  variant="h4"
                >
                  {data![selectedSuccessStory].name}
                </Typography>
                <Typography variant="small" className="text-center sm:text-left">
                  {data![selectedSuccessStory].uni}
                </Typography>
              </div>
              <div className="justify-self-center sm:justify-self-end flex flex-row gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Star
                      className="fill-primary size-10"
                      strokeWidth={0}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <Typography className="text-justify my-10 multi-line-truncate">
              {data![selectedSuccessStory].successStory}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-row gap-5 justify-center items-center sm:justify-end">
          <Button
            customClass="bg-secondary rounded-full"
            onClick={onPrevClick}
          >
            <ChevronLeft className="text-white" />
          </Button>

          <Button customClass="block sm:hidden" onClick={onOpenModel}>
            Read More
          </Button>

          <Button
            customClass="bg-secondary rounded-full"
            onClick={onNextClick}
          >
            <ChevronRight className="text-white" />
          </Button>
        </div>
      </div>

      <Modal dialogWrapperClassName="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%]" ref={modalRef}>
        <div className=" max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex flex-row items-center justify-start gap-5 mb-5">
            <div className="grow">
              <Typography className="" variant="h4">
                {data![selectedSuccessStory].name}
              </Typography>
              <Typography variant="small" className="">
                {data![selectedSuccessStory].uni}
              </Typography>
            </div>
          </div>
          <Typography className="text-justify ">
            {data![selectedSuccessStory].successStory}
          </Typography>
        </div>
      </Modal>
    </Container>
  );
}


