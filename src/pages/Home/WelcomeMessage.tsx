import { motion } from "framer-motion";

const WelcomeMessage = () => {
  return (
    <div className="max-w-full bg-primary-200 py-4 overflow-hidden">
      <motion.p
        className="max-w-full bg-primary-200 py-4 overflow-visible whitespace-nowrap text-xl text-primary-900"
        initial={{
          x: "50%",
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Welcome to our news hub, where stories unfold and information
        enlightens. Dive into a world of breaking news, captivating articles,
        and insightful analysis, meticulously curated to keep you informed and
        engaged. From global events to local highlights, our platform offers a
        comprehensive view of the latest happenings across various topics,
        including politics, technology, entertainment, sports, and more. Stay
        ahead of the curve with our up-to-the-minute updates and in-depth
        coverage, delivered straight to your screen. Whether you're a news
        enthusiast, a curious mind, or simply seeking knowledge, join us on a
        journey of discovery and exploration. Explore, learn, and connect with
        the world through our dynamic news platform
      </motion.p>
    </div>
  );
};

export default WelcomeMessage;
