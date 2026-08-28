import { Layout } from "@/components/Layout";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Layout showEchelonFooter>
      {/* Header */}
      <section className="container-wide pt-16 md:pt-24 pb-12 md:pb-16">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Producties
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Documentaires, onderzoeksreportages en online reeksen voor onder meer
          VRT NWS, Canvas, Eén en Lumière.
        </p>
      </section>

      {/* Project List */}
      <section className="pb-24 border-t border-separator">
        {projects.map((project, index) => (
          <ProjectListItem
            key={project.id}
            id={project.id}
            title={project.title}
            tags={project.tags}
            year={project.year}
            image={project.coverImage}
            index={index}
          />
        ))}
      </section>
    </Layout>
  );
};

export default Work;
