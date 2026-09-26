import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Internal.module.css";

export default function PlateauPeaceCallPost() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <span style={{ color: "var(--color-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>
            Press Release & Event Detail
          </span>
          <h1 style={{ fontSize: "2.5rem", maxWidth: "900px", margin: "0 auto 1rem", lineHeight: 1.2 }}>
            Plateau: Islamic, Christian Clerics Make Joint Call For Peace Over Contradictory Judgments
          </h1>
          <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>Published: Oct 30, 2023 | Inter-Faith Peace Initiative</p>
        </div>
      </header>

      <main className="container section-padding" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <Link href="/" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
            ← Back to Homepage
          </Link>
        </div>

        {/* Featured Image Hero */}
        <div style={{ position: "relative", height: "480px", borderRadius: "24px", overflow: "hidden", marginBottom: "3rem", boxShadow: "var(--shadow-md)" }}>
          <Image
            src="/images/Posts/P1a.jpeg"
            alt="Islamic and Christian Clerics Joint Call for Peace"
            fill
            priority
            sizes="(max-width: 992px) 100vw, 900px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* Article Body */}
        <article style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text)" }}>
          <p style={{ fontWeight: 600, fontSize: "1.2rem", color: "#2c3e50", marginBottom: "1.5rem" }}>
            A pro-democracy group, Peace and Good Governance Advocates, PEGGA has commended Christian and Muslim clerics on the plateau for their bold decision to join forces against alleged plots to cause mayhem in the state using contradictory judgments of the election petitions at the tribunal and the Court of Appeal.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            PEGGA made its reaction after the Plateau State Christian and Muslim Inter-Faith group chided those it termed as “desperate politicians,” for trying to ignite a fresh crisis in the State.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The inter-faith group jointly led by Evangelist Joshua Ringsum and Imam Othman Abdullahi had at a press briefing in Jos on Saturday called on the National Judicial Council and other stakeholders to monitor the activities of election petition tribunals and appeal courts which it alleged were giving contradictory judgments.
          </p>

          {/* Image 2 Gallery Highlight */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", margin: "2.5rem 0" }}>
            <div style={{ position: "relative", height: "260px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="/images/Posts/P1b.jpeg" alt="Press Conference Clerics" fill sizes="(max-width: 768px) 100vw, 450px" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ position: "relative", height: "260px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="/images/Posts/P1c.jpeg" alt="Interfaith Leaders Gathering" fill sizes="(max-width: 768px) 100vw, 450px" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>
            Querying the contradictory judgments on the plateau, the Christian and Muslim clerics had called on the National Judicial Council (NJC) to “give special focus on panels handling Plateau petitions to avoid the unnecessary tension in the State on account of contradictory and conflicting judgments dispensed to erode the popular mandate of the people through technicalities.”
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Amplifying the call by the clerics, PEGGA in a statement issued by its national coordinator, Mani Imman said:
          </p>

          <blockquote style={{ borderLeft: "4px solid var(--color-secondary)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "#4a5568" }}>
            “We find it gladdening that otherwise competing faith leaders have come together to speak against the threats to peace on the plateau on account of the contradictory judgments coming out from the tribunals and the appeal courts.”
          </blockquote>

          <blockquote style={{ borderLeft: "4px solid var(--color-secondary)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "#4a5568" }}>
            “We particularly laud the clerics for not giving themselves as advocates of the political parties or cowing to the rascality that we see coming out from the judiciary.”
          </blockquote>

          <blockquote style={{ borderLeft: "4px solid var(--color-secondary)", paddingLeft: "1.5rem", fontStyle: "italic", margin: "2rem 0", color: "#4a5568" }}>
            “We call on the clerics to remain steadfast and as leaders of faith to also add prayers to their supplication against the threats to peace on the plateau.”
          </blockquote>

          <p style={{ marginBottom: "1.5rem" }}>
            “As the clerics observed in their joint press conference on Saturday, using the judiciary to truncate the popular will of the people will reverse the gains of the peace efforts being achieved by the Federal and Plateau State Governments.
          </p>

          <p style={{ marginBottom: "2rem" }}>
            “It is on this note that we reiterate the call to the National Judicial Council, NJC to rein in judicial officers from truncating the will of the people for selfish goals.”
          </p>
        </article>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #eee", textAlign: "center" }}>
          <Link href="/work" className="btn btn-outline" style={{ padding: "0.8rem 2rem" }}>
            Explore More Actions & Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
