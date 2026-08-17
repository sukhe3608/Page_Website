import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "@/components/animation/AnimatedBackground";
import { isBot } from "@/utils/env";

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page not found" description="The page you're looking for doesn't exist or has moved." path="/404" noindex />

      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-bg pt-24" aria-labelledby="notfound-heading">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-soft blur-3xl" />
          <AnimatedBackground className="absolute inset-0 h-full w-full opacity-60" density={0.5} />
        </div>

        <div className="container-x relative flex flex-col items-center gap-8 text-center">
          <div className="relative" aria-hidden="true">
            <motion.span
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/20"
              animate={isBot ? undefined : { rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="text-gradient text-[clamp(6rem,22vw,12rem)] font-bold leading-none tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              404
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <span className="eyebrow">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Lost signal
            </span>
            <h1 id="notfound-heading" className="max-w-xl text-balance text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-tight text-navy">
              Something went off the path
            </h1>
            <p className="max-w-md text-pretty text-[15px] leading-relaxed text-muted">
              The page you're looking for doesn't exist or has moved. Let's get you back to solid ground.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <Button to="/" icon={<ArrowLeft className="h-4 w-4" aria-hidden="true" />}>
              Return Home
            </Button>
            <Button to="/services" variant="outline">
              Explore Services
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Still stuck?{" "}
            <Link to="/contact" className="font-semibold text-primary transition-colors hover:text-primary-dark">
              Talk to us
            </Link>{" "}
            — we're happy to point you the right way.
          </motion.p>
        </div>
      </section>
    </PageTransition>
  );
}