import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, Target, Layers, Quote, ChevronDown, ChevronUp, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { useState } from "react";

function CaseStudyCard({ study, index }: { study: typeof portfolioData.caseStudies[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden">
        <div
          className={`h-48 sm:h-64 bg-gradient-to-br ${study.heroGradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-2" data-testid={`text-case-study-title-${index}`}>
                {study.title}
              </h3>
              <p className="text-white/90 text-lg">{study.subtitle}</p>
            </div>
          </div>
        </div>

        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{study.role}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{study.timeline}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-primary" />
                Overview
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {study.overview}
              </p>
            </div>

            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4 text-primary" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {study.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {study.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-lg bg-card border border-border"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {study.presentationUrl && (
              <Button
                variant="outline"
                asChild
                className="w-full"
                data-testid={`button-view-presentation-${index}`}
              >
                <a href={study.presentationUrl} target="_blank" rel="noopener noreferrer">
                  <Presentation className="h-4 w-4 mr-2" />
                  View Presentation
                </a>
              </Button>
            )}

            <Button
              variant="ghost"
              onClick={() => setExpanded(!expanded)}
              className="w-full justify-between"
              data-testid={`button-expand-case-study-${index}`}
            >
              {expanded ? "Show Less" : "Read Full Case Study"}
              {expanded ? (
                <ChevronUp className="h-4 w-4 ml-2" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-2" />
              )}
            </Button>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 pt-4 border-t border-border"
              >
                <div>
                  <h4 className="font-semibold mb-2 text-destructive">The Problem</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">The Solution</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {study.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Impact & Results</h4>
                  <ul className="space-y-2">
                    {study.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {study.userQuotes && study.userQuotes.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Quote className="h-4 w-4 text-primary" />
                      User Insights
                    </h4>
                    <div className="space-y-3">
                      {study.userQuotes.map((quote, idx) => (
                        <blockquote
                          key={idx}
                          className="border-l-2 border-primary pl-4 py-1 text-sm italic text-muted-foreground"
                        >
                          "{quote}"
                        </blockquote>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const { caseStudies } = portfolioData;

  return (
    <section id="case-studies" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into products I've built, from problem discovery to impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
