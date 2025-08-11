import { slugify } from './utils';

export interface Question {
  question_number: string;
  question: string;
  choices: string[];
  answer: string;
}

export interface Chapter {
  [chapterName: string]: Question[];
}

export interface MCQData {
  [sectionName: string]: Chapter;
}

export interface ChapterData {
  name: string;
  questions: Question[];
  sectionName: string;
}

export const mcqData: MCQData = {
  "SECTION I: SURGICAL FUNDAMENTALS": {
    "Chapter 1: Physiologic Response to Injury": [
      {
        "question_number": "1",
        "question": "Cytokines involved in the initial proinflammatory response include all of the following except:",
        "choices": [
          "A. Interleukin-6",
          "B. Interleukin-10",
          "C. Tumor necrosis factor-a",
          "D. Interleukin-1",
          "E. Interleukin-8"
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "Which of the following is true regarding the role of TNF-a release in the inflammatory response?",
        "choices": [
          "A. It can be effectively blocked by anti-TNF-a antibodies to halt systemic inflammatory response syndrome (SIRS).",
          "B. It does not have any beneficial effects in the early phases of the inflammatory response.",
          "C. It is primarily from leukocytes.",
          "D. It promotes polymorphonuclear (PMN) cell adherence and further cytokine release.",
          "E. It is always deleterious."
        ],
        "answer": "D"
      },
      {
        "question_number": "3",
        "question": "A 56-year-old female is admitted to the intensive care unit (ICU) with a diffuse axonal injury after a motor vehicle crash. The nursing staff notices coffee ground material coming from her orogastric tube. What is the best interven- tion to prevent this complication?",
        "choices": [
          "A. Enteral feeding",
          "B. Oral sucralfate",
          "C. Oral proton pump inhibitor (PPI)",
          "D. Intravenous (IV) H2 blocker",
          "E. IV PPI drip"
        ],
        "answer": "D"
      },
      {
        "question_number": "4",
        "question": "A 64-year-old male with severe pancreatitis is transferred to the ICU from an outside hospital. A report is given to the nurse that the patient has received “large-volume resuscitation.” Upon reaching the ICU, he is afebrile, tachycardic to 127, and has a BP of 120/60 mmHg. His abdomen is tense and full; he has a Foley in place but no urine in the bag. You suspect abdominal compartment syndrome (ACS). What is the mechanism of his oliguria?",
        "choices": [
          "A. Extrinsic compression of abdominal organs on the kidneys, leading to reduced GFR",
          "B. Elevated renal venous pressure, leading to reduced GFR",
          "C. Decreased arterial flow to the kidney, leading to reduced glomerular filtration rate (GFR)",
          "D. Extrinsic compression of the ureters, causing an obstruc- tive oliguric renal failure",
          "E. Compression of the bladder, causing an obstructive oliguric renal failure"
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "For the patient in Question 4, which of the following parameters would necessitate a decompressive laparotomy for treatment?",
        "choices": [
          "A. Peak airway pressures of 30 mmHg",
          "B. Systemic vascular resistance of $1400 dyn/s/cm^{5}$",
          "C. Pulmonary capillary wedge pressure of 18 mmHg",
          "D. Urine output of 0 ml",
          "E. Requirements of Fraction of inspired oxygen $(FiO)_{2}$ of 80% with positive endexpiratory pressure (PEEP) of 12"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "A patient is brought to the emergency department after being found unresponsive. Electroencephalography (EEG) indicates status epilepticus. A potential secondary clinical consequence is:",
        "choices": [
          "A. Meningitis",
          "B. Hypothermia",
          "C. Myoglobinuria",
          "D. Cerebrovascular accident",
          "E. Hypoglycemia"
        ],
        "answer": "C"
      },
      {
        "question_number": "7",
        "question": "Euthyroid sick syndrome is diagnosed in a patient in the surgical ICU. All of the following are part of this clinical phenomenon except:",
        "choices": [
          "A. The patient behaves as though clinically hypothyroid",
          "B. Normal or decreased total serum thyroxine (T4) level",
          "C. Increased serum reversed triiodothyronine (rT3) level",
          "D. Decreased thyroid stimulating hormone (TSH) level",
          "E. Decreased total serum T3 level"
        ],
        "answer": "A"
      },
      {
        "question_number": "8",
        "question": "Acute respiratory distress syndrome (ARDS) develops in an acutely injured patient. If an alveolar biopsy specimen were taken within the first 24 h, the histologic examination would demonstrate:",
        "choices": [
          "A. Influx of protein-rich fluid and leukocytes",
          "B. Preservation of type II pneumocytes",
          "C. Bacterial colonization",
          "D. Alveolar hemorrhage",
          "E. High levels of collagen and fibronectin"
        ],
        "answer": "A"
      },
      {
        "question_number": "9",
        "question": "An obese patient with a body mass index (BMI) of 50 underwent a laparoscopic gastric bypass. Because of a technical difficulty in the case, the procedure lasted for 8 h. The patient was doing well postoperatively until 4 h, when the nurse noted a change in the urine color from yellow to dark brown. She also reported that the patient's urine output decreased and his creatinine increased from 1.0 to 1.5. Which test would confirm the cause of these findings?",
        "choices": [
          "A. Renal ultrasound",
          "B. Haptoglobin",
          "C. Serum creatinine kinase",
          "D. Complete blood count",
          "E. Urine electrolytes"
        ],
        "answer": "C"
      },
      {
        "question_number": "10",
        "question": "The primary algorithm to treat the patient in Question 9 includes all of the following except:",
        "choices": [
          "A. Loop diuretics",
          "B. Mannitol",
          "C. Aggressive intravenous fluid resuscitation",
          "D. Sodium bicarbonate",
          "E. Serial basic metabolic panels"
        ],
        "answer": "A"
      },
      {
        "question_number": "11",
        "question": "An 82-year-old female with multiple prior abdominal surgeries presents with a small bowel obstruction. She undergoes an exploratory laparotomy with an extensive lysis of adhesions for 7 h. She receives 2 L of crystalloid during the case and has 200 cc of urine output. Her creatinine increases by 0.6 mg/dL the next day. All of the following are appropriate treatments except:",
        "choices": [
          "A. Rule out causes of outflow obstruction",
          "B. Recheck hemoglobin",
          "C. Calculate fractional excretion of sodium (FeNa)",
          "D. Give a bolus of fluid",
          "E. Start vasopressors for a mean arterial pressure (MAP) goal of 65 mmHg"
        ],
        "answer": "E"
      },
      {
        "question_number": "12",
        "question": "A 52-year-old diabetic male presents to the emergency department with chest pain, diaphoresis, and an elevated troponin. He is taken to the cardiac catheterization lab. Which of the following is true of contrast-induced AKI (CIAKI)?",
        "choices": [
          "A. It is the most common form of iatrogenic AKI in hospitalized patients.",
          "B. CIAKI is characterized by oliguria.",
          "C. Evidence of CIAKI occurs within 6 to 24 h of contrast administration.",
          "D. The creatinine returns to normal within 1 month of insult for most patients.",
          "E. The 1-year mortality associated with CIAKI is <5%"
        ],
        "answer": "A"
      },
      {
        "question_number": "13",
        "question": "Which of the following interventions reduces the likelihood of CIAKI?",
        "choices": [
          "A. N-acetylcysteine administration before giving the dye load",
          "B. A one-time dose of prednisone 40 mg before administra- tion of dye load",
          "C. 0.9% normal saline for 12 h before and after giving the dye load",
          "D. 0.45% normal saline for 12 h before and after giving the dye load",
          "E. 1 L bolus of 0.9 normal saline at the time of giving the dye load"
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "A 47-year-old male with Crohn's colitis maintained on 40 mg prednisone daily for the past year presents for elective colectomy. The procedure was uncomplicated, and he was adequately resuscitated. In the postanesthesia care unit (PACU) the patient is noted to be febrile and hypotensive with MAPs in the 50s. What is your next step in management?",
        "choices": [
          "A. IV dobutamine",
          "B. Hydrocortisone",
          "C. 1 unit of packed red blood cells",
          "D. Antibiotics",
          "E. Epinephrine"
        ],
        "answer": "B"
      },
      {
        "question_number": "15",
        "question": "You are called by a PACU nurse for a patient who just underwent an elective splenectomy for idiopathic thrombotic purpura. The patient is afebrile, tachycardic, and hypotensive. What is your next step in management?",
        "choices": [
          "A. Check hemoglobin",
          "B. IV fluid resuscitation",
          "C. Electrocardiogram",
          "D. Antibiotics",
          "E. Start vasopressors"
        ],
        "answer": "A"
      },
      {
        "question_number": "16",
        "question": "Which of the following metabolic changes occur during times of physiologic stress?",
        "choices": [
          "A. Increase in growth hormone (GH) release",
          "B. Increase in TSH",
          "C. Increased levels of T4 and T3",
          "D. Initial insulin increase and then suppression",
          "E. Increase in cortisol excretion"
        ],
        "answer": "E"
      },
      {
        "question_number": "17",
        "question": "Which of the following patients most likely has sepsis and should have prompt evaluation for transfer to an ICU?",
        "choices": [
          "A. A 27-year-old female after lithotripsy for nephrolithiasis who is afebrile with a heart rate (HR) of 102, BP 90/40 mmHg, altered mental status, and white blood cell (WBC) count of 9",
          "B. A 72-year-old male with pancreatitis and a temperature of 102 degrees Farenheit, HR 110 beats/min, BP 110/60 mmHg, and WBC count of 14 cells per mel",
          "C. A 53-year-old female at postoperative day 0 from a colon resection who is tachycardic to 120 s and requires intubation in the PACU",
          "D. An 84-year-old nursing home resident with a urine culture positive for Proteus spp.",
          "E. An 18-year-old male who presented with a gangrenous appendicitis, is now at postoperative day 0 from a laparoscopic appendectomy, and is febrile to 103 and tachycardic to 130 s with BP of 140/70"
        ],
        "answer": "A"
      },
      {
        "question_number": "18",
        "question": "Which of the following is the best parameter for monitoring septic shock?",
        "choices": [
          "A. Central venous pressure (CVP)",
          "B. Vasopressor requirement",
          "C. Urine output",
          "D. Serum lactate",
          "E. Mental status changes"
        ],
        "answer": "D"
      },
      {
        "question_number": "19",
        "question": "All of the following are negative outcomes that have been directly associated with perioperative hypothermia except:",
        "choices": [
          "A. Coagulopathy",
          "B. Wound infections",
          "C. Nosocomial pneumonia",
          "D. Myocardial ischemia",
          "E. Delayed wound healing"
        ],
        "answer": "C"
      },
      {
        "question_number": "20",
        "question": "An obese 21-year-old male suffers multiple fractures and a liver injury, 21 days later, he develops acute dyspnea, diaphoresis, and desaturates to 86% at room air. A computed tomography (CT) of the chest is positive for pulmonary embolus. All of the following are risk factors for venous thromboembolic events except:",
        "choices": [
          "A. Severity of injury",
          "B. BMI",
          "C. Smoking",
          "D. Pelvic fractures",
          "E. Hypertriglyceridemia"
        ],
        "answer": "E"
      },
      {
        "question_number": "21",
        "question": "Which of the following patients should receive prolonged prophylaxis (28 days) for VTE?",
        "choices": [
          "A. Female with a newly diagnosed DVT in her right popliteal vein",
          "B. Male with chronic pulmonary embolus who undergoes a laparoscopic cholecystectomy",
          "C. Female with gastric cancer who undergoes a total gastrectomy",
          "D. Female with uterine fibroids undergoing total abdominal hysterectomy",
          "E. Female with breast cancer undergoing bilateral mastectomy"
        ],
        "answer": "C"
      },
      {
        "question_number": "22",
        "question": "Which of the following is a contraindication to enteral feeding?",
        "choices": [
          "A. Ileus",
          "B. Small bowel anastomosis",
          "C. Hemodynamic instability requiring vasopressors",
          "D. Pancreatitis",
          "E. Pneumonia"
        ],
        "answer": "C"
      },
      {
        "question_number": "23",
        "question": "A patient with a previous history of ischemic bowel requiring extensive bowel resection, now with only 100 cm of bowel remaining and dependent on total parenteral nutrition (TPN), presents to your office complaining of hair loss, rash on the extremities, and dry skin. Which nutrient deficiency is this patient most likely suffering from?",
        "choices": [
          "A. Copper",
          "B. Selenium",
          "C. Vitamin D",
          "D. Essential fatty acids",
          "E. Zinc"
        ],
        "answer": "D"
      },
      {
        "question_number": "24",
        "question": "Strategies that have been suggested to decrease the risk for postoperative pulmonary complications include all of the following except:",
        "choices": [
          "A. Routine nasogastric tube decompression",
          "B. Lung expansion maneuvers",
          "C. Preoperative smoking cessation",
          "D. Postoperative epidural anesthesia",
          "E. Use of intraoperative short-acting neuromuscular blocking agents"
        ],
        "answer": "A"
      },
      {
        "question_number": "25",
        "question": "A patient with resolving ARDS requires a tracheostomy. The family wants to know the benefit of early tracheostomy compared with prolonged intubation. Which of the following is correct?",
        "choices": [
          "A. There is no difference in overall mortality between patients receiving prolonged endotracheal (ET) intubation and those receiving tracheostomy.",
          "B. There is increased sedation and pain requirement with a surgically placed tracheostomy.",
          "C. There is an increased risk of pneumonia with ET intubation.",
          "D. There is a decrease in the time required for mechanical ventilation with tracheostomy.",
          "E. ICU stays are the same for both ET intubation and tracheostomy."
        ],
        "answer": "A"
      }
    ],
    "Chapter 2: Wound Healing and Cell Biology": [
      {
        "question_number": "1",
        "question": "Which of the following statements regarding the role of collagen in wound healing is true?",
        "choices": [
          "A. Collagen synthesis in the initial phase of injury is the sole responsibility of endothelial cells.",
          "B. Net collagen content increases for up to 2 years after injury.",
          "C. At 3 weeks after injury, more than 50% of the tensile strength of the wound has been restored.",
          "D. Tensile strength of the wound increases gradually for up to 2 years after injury; however, it generally reaches a level of only about 80% of that of uninjured tissue.",
          "E. Tensile strength is the force necessary to reopen a wound."
        ],
        "answer": "D"
      },
      {
        "question_number": "2",
        "question": "A 34-year-old man sustained a gunshot wound to his abdomen that necessitated exploratory laparotomy and small bowel resection. Two weeks after the initial operation, he was reex- plored for a large intraabdominal abscess. Which of the following will result in the most rapid gain in strength of the new incision?",
        "choices": [
          "A. A separate transverse incision is made.",
          "B. The midline scar is excised with a 1-cm margin.",
          "C. The midline incision is reopened without excision of the scar.",
          "D. The midline incision is left to heal by secondary intention.",
          "E. The rate of gain in strength is not affected by the incision technique."
        ],
        "answer": "C"
      },
      {
        "question_number": "3",
        "question": "A 29-year-old black woman is scheduled for incision and drainage of a breast abscess that has recurred three times despite ultrasound-guided needle drainage. The patient has a history of keloid formation and is concerned about an unsightly scar on her breast. Which of the following statements concerning wound healing is true?",
        "choices": [
          "A. Keloids contain an overabundance of fibroblasts.",
          "B. A hypertrophic scar extends beyond the boundaries of the original wound.",
          "C. Improvement is usually seen with keloid excision followed by intralesional steroid injection.",
          "D. An incision placed perpendicular to the lines of natural skin tension will result in the least obvious scar.",
          "E. Hypertrophic scars occur most commonly on the lower extremities."
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "A 30-year-old man is scheduled for definitive management of his open wounds after undergoing embolectomy and fasciotomies on his left lower extremity. Which of the following statements is true regarding the use of split- and full-thickness skin grafts?",
        "choices": [
          "A. A split-thickness skin graft undergoes approximately 40% shrinkage of its surface area immediately after harvesting.",
          "B. A full-thickness skin graft undergoes approximately 10% shrinkage of its surface area immediately after harvesting.",
          "C. Secondary contraction is more likely to occur after adequate healing of a full-thickness skin graft than after adequate healing of a split-thickness skin graft.",
          "D. Sensation usually returns to areas that have undergone skin grafting.",
          "E. Skin grafts may be exposed to moderate amounts of sunlight without changing pigmentation."
        ],
        "answer": "D"
      },
      {
        "question_number": "5",
        "question": "A 21-year-old graduate student has a large hypertrophic scar on the lower part of her face. The patient had sustained a laceration on her face 2 years previously after hitting her face on the side of a swimming pool. Which of the following statements regarding scar revision is true?",
        "choices": [
          "A. Scar maturation refers to the change in size of the wound in the first I to 2 months.",
          "B. Scar revision should have been performed in the first 3 months after injury to minimize fibrosis.",
          "C. Revision should be performed earlier in children than in adults.",
          "D. It corrects undesirable pigmentation.",
          "E. Scar revision should be delayed for approximately 1 year to allow maturation."
        ],
        "answer": "E"
      },
      {
        "question_number": "6",
        "question": "A 68-year-old diabetic man undergoes a below-knee amputation. The patient's postoperative course is complicated by severe depression and anorexia. Before discharge, the patient is started on a multivitamin regimen. Which of the following statements regarding wound healing is true?",
        "choices": [
          "A. Vitamin A is needed for hydroxylation of lysine and proline in collagen synthesis.",
          "B. High doses of vitamin C improve wound healing.",
          "C. Vitamin E is involved in the stimulation of fibroplasia, collagen cross-linking, and epithelialization.",
          "D. Zinc deficiency results in delayed early wound healing.",
          "E. Iron deficiency has been linked to defects in long-term wound remodeling."
        ],
        "answer": "D"
      },
      {
        "question_number": "7",
        "question": "Which of the following statements regarding wound epithelialization is true?",
        "choices": [
          "A. Integrins act as a key modulator of the interaction between epithelial cells and the surrounding environment.",
          "B. Structural support and attachment between the epidermis and dermis are provided by tight cell junctions.",
          "C. Early tensile strength of the wound is a direct result of collagen deposition.",
          "D. A reepithelialized wound develops hair follicles and sweat glands like those seen in the normal skin.",
          "E. Contact inhibition can prevent collagen deposition and result in a chronic (nonhealing) wound."
        ],
        "answer": "A"
      },
      {
        "question_number": "8",
        "question": "In DNA replication, what type of mutation is specifically associated with the generation of a stop codon?",
        "choices": [
          "A. Point mutation",
          "B. Missense mutation",
          "C. Nonsense mutation",
          "D. Frameshift mutation",
          "E. Neutral mutation"
        ],
        "answer": "C"
      },
      {
        "question_number": "9",
        "question": "Which of the following is correct regarding cell signaling?",
        "choices": [
          "A. Cytokines are exclusively peptide mediators.",
          "B. Autocrine mediators are secreted by a cell and act on adjacent cells of a different type.",
          "C. Cytokines are usually produced by cells specialized for only that purpose.",
          "D. The effects of hormones are generally local rather than global.",
          "E. Growth factors are frequently mediated by second messenger systems such as diacylglycerol (DAG) and cyclic adenosine monophosphate (CAMP)."
        ],
        "answer": "E"
      },
      {
        "question_number": "10",
        "question": "A 25-year-old man presents to the office with complaints of contracture of his left index finger after a burn injury. Which of the following statements is true about growth factors?",
        "choices": [
          "A. Epidermal growth factor (EGF) stimulates the production of collagen.",
          "B. Vascular endothelial growth factor (VEGF) and platelet- derived growth factor (PDGF) both stimulate angiogen- esis by binding to a common receptor.",
          "C. Fibroblast growth factor (FGF) stimulates wound contraction.",
          "D. Transforming growth factor-β (TGF-β) is stored in endothelial cells.",
          "E. Tumor necrosis factor-a (TNF-a) inhibits angiogenesis."
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "An 85-year-old nursing home patient is found to have a worsening stage III sacral pressure ulcer. The ulcer is debrided and tissue for culture obtained. Tissue cultures reveal 10^8 organisms per gram of tissue after operative debridement. What is the next most appropriate step in the management of the patient's wound?",
        "choices": [
          "A. Muscle flap coverage",
          "B. Wound vacuum-assisted closure (VAC)",
          "C. Intravenous antibiotics",
          "D. Repeat debridement",
          "E. Debridement with immediate application of a split-thick- ness skin graft"
        ],
        "answer": "D"
      },
      {
        "question_number": "12",
        "question": "A 45-year-old woman undergoes bilateral transverse rectus abdominis muscle (TRAM) breast reconstruction after modified radical mastectomy. The patient is scheduled for postoperative radiation therapy and is concerned that this will affect her wound-healing ability. Which of the following statements regarding wound healing in this patient is true?",
        "choices": [
          "A. Denervation has a profound effect on wound contraction and epithelialization.",
          "B. A bacterial count of 1000 organisms per square centime- ter retards wound healing.",
          "C. Chemotherapy beginning 10 to 14 days after primary wound closure has little effect on the final status of a wound.",
          "D. Tissue ischemia is the main component of tissue damage after irradiation.",
          "E. Postoperative radiation therapy should be delayed for at least 4 to 6 months after surgery to decrease the inci- dence of wound complications."
        ],
        "answer": "C"
      },
      {
        "question_number": "13",
        "question": "A 46-year-old man is evaluated shortly after undergoing radiation therapy and chemotherapy for primary laryngeal cancer. He also gives a history of long-term steroid use for rheumatoid arthritis. The patient complains of a chronic, nonhealing wound on his neck, just over his right clavicular head. Which statement regarding the treatment of this wound is true?",
        "choices": [
          "A. The wound should be treated with compression dressings.",
          "B. The wound should be treated with injected steroids.",
          "C. The patient should start taking vitamin A, and the wound should be covered with antimicrobial dressings.",
          "D. The patient should start taking vitamin C, and the wound should be kept open to air.",
          "E. The wound should be excised and a skin graft applied."
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "A 25-year-old ballet dancer with a history of anorexia nervosa arrives at the emergency department with right lower quadrant pain. After an appendectomy, a wound infection at the surgical site requires debridement. The patient is placed on an antibiotic regimen, and the wound is packed with wet-to-dry dressings. Regarding wound healing and malnutri- tion, which of the following statements is true?",
        "choices": [
          "A. Hypoproteinemia leads to decreased levels of arginine and glutamine, which are essential in wound healing.",
          "B. Cell membranes rapidly become dehydrated in the absence of vitamin E, resulting in delayed wound healing.",
          "C. Zinc is essential to the fibroblast's ability to cross-link collagen.",
          "D. Vitamin D serves an immunomodulatory role in wound healing.",
          "E. The patient should be treated with high-dose vitamin C, vitamin A, and zinc."
        ],
        "answer": "D"
      },
      {
        "question_number": "15",
        "question": "Which of the following statements regarding second messenger systems is true?",
        "choices": [
          "A. Most receptor proteins (such as G proteins) are com- pletely extracellular.",
          "B. Both the \"first messenger\" and \"second messenger\" mediators of cell signaling function within the cell cytoplasm.",
          "C. Adenylate cyclase stimulates the conversion of CAMP to adenosine triphosphate (ATP).",
          "D. $IP_{3}$ generally increases cytoplasmic calcium concentrations.",
          "E. $IP_{3}$ and DAG together lead to inactivation of protein kinase C."
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "Inflammatory breast cancer is diagnosed in a 36-year-old woman. A decision is made to treat the patient with radiation, along with paclitaxel and doxorubicin. Which of the following statements regarding cellular motility and contrac- tility is true?",
        "choices": [
          "A. Actin fibers are found mainly in muscle cells.",
          "B. The interactions between actin and myosin that underlie the contraction of skeletal muscle require calcium but not ATP.",
          "C. Intermediate filaments extend from the centrosome to the nucleus.",
          "D. The proteins kinesin and dynein are required for directional transport of cellular components along the microtubules.",
          "E. The microtubules used to form the spindle apparatus are synthesized de novo before each mitosis."
        ],
        "answer": "D"
      },
      {
        "question_number": "17",
        "question": "Regarding chemotherapeutic agents, which of the following statements is true?",
        "choices": [
          "A. Paclitaxel is a manmade taxane first manufactured in the polycarbon industry.",
          "B. Taxanes unwind DNA thus preventing transcription.",
          "C. Vinca alkaloids inhibit cell division by disrupting the mitotic spindle.",
          "D. Doxirubicin intercalates between DNA base pairs thus disrupting transcription.",
          "E. Taxanes impair the progression of topoisomerase ii."
        ],
        "answer": "C"
      },
      {
        "question_number": "18",
        "question": "A 27-year-old woman sustains an incomplete T10 spinal cord injury after falling off a horse. The patient is given 30 mg/kg of methylprednisolone. Which of the following is true regarding steroid hormones and their receptors?",
        "choices": [
          "A. Steroid hormones are synthesized from proteins.",
          "B. In the bloodstream, steroid hormones often dimerize to facilitate transport.",
          "C. Steroid hormone receptors are found only in the cytoplasm.",
          "D. Heat shock proteins (HSPs) are usually associated with cytosolic steroid hormone receptors.",
          "E. Binding of the steroid hormone to a receptor induces a second messenger cascade to alter cellular metabolism."
        ],
        "answer": "D"
      },
      {
        "question_number": "19",
        "question": "A 55-year-old man with a history of hepatitis C cirrhosis has complaints of nausea, fever, and progressive lethargy. Part of his evaluation includes an assessment of his hepatitis C viral load. Which of the following tests would be most useful in assessing his hepatitis C viral load?",
        "choices": [
          "A. Western blot",
          "B. Gel electrophoresis",
          "C. Fluorescence microscopy",
          "D. Polymerase chain reaction (PCR)",
          "E. Expression cloning"
        ],
        "answer": "D"
      },
      {
        "question_number": "20",
        "question": "A 56-year-old man underwent total thyroidectomy for papillary cancer. On the first postoperative day, the patient complains of circumoral tingling and muscle weakness. Which of the following statements regarding the electrical properties of cell membranes is not true?",
        "choices": [
          "A. Ions flow through hydrophilic channels formed by specific transmembrane proteins.",
          "B. Lipids provide the ability to store electric charge (capacitance).",
          "C. Active pumps maintain the ionic gradients necessary for a resting membrane potential.",
          "D. Initiation of an action potential depends on voltage-gated channels.",
          "E. Large numbers of sodium ions rush in during the initial phase of a nerve action potential."
        ],
        "answer": "E"
      },
      {
        "question_number": "21",
        "question": "Which cell junction acts as a transmembrane linkage without an intracellular communication function?",
        "choices": [
          "A. Tight junction",
          "B. Gap junction",
          "C. Desmosome",
          "D. Connexon",
          "E. All of the above junctions have an intracellular communi- cation function"
        ],
        "answer": "C"
      },
      {
        "question_number": "22",
        "question": "A 42-year-old woman with a history of end-stage renal disease is being evaluated for cadaveric renal transplantation. Which of the following statements regarding cell surface antigens is true?",
        "choices": [
          "A. Cell surface antigens are generally glycoproteins or glycolipids.",
          "B. Histocompatibility antigens are not cell surface antigens.",
          "C. ABO antigens are glycoproteins.",
          "D. ABO antibodies are present at birth.",
          "E. Human leukocyte antigen (HLA) has an extracellular hydrophobic region and an intracellular hydrophilic region."
        ],
        "answer": "A"
      },
      {
        "question_number": "23",
        "question": "Regarding chemical messengers, which statement is true?",
        "choices": [
          "A. They depend on cell surface-bound proteins to exert their effect.",
          "B. They are limited to intracellular receptors to exert their effect.",
          "C. First messengers bind directly to DNA to begin the protein synthesis process.",
          "D. Extracellular ligands are termed the \"second messengers.\"",
          "E. Extracellular ligands are termed the \"first messengers.\""
        ],
        "answer": "E"
      },
      {
        "question_number": "24",
        "question": "A 67-year-old man undergoes revascularization of his right lower extremity after sustaining thrombosis secondary to a popliteal artery aneurysm. Shortly after surgery, a compart- ment syndrome of the affected limb develops and is attributed to reperfusion injury. Research suggests that ER stress may be responsible for apoptosis after ischemia. Which of the following statements regarding the ER is not true?",
        "choices": [
          "A. Rough ER is a primary site of lipid synthesis.",
          "B. Smooth ER plays an important role in the metabolism of drugs.",
          "C. Ribosomes attached to the rough ER manufacture proteins for use within the cell.",
          "D. SR is found mainly in epithelial cells.",
          "E. SR plays an important role in gluconeogenesis."
        ],
        "answer": "B"
      },
      {
        "question_number": "25",
        "question": "Which of the following statements regarding lysosomes is true?",
        "choices": [
          "A. Primary lysosomes usually contain extracellular material targeted for digestion.",
          "B. Lysosomal enzymes work effectively in the acidic pH of the cytoplasm.",
          "C. Serum levels of lysosomal acid phosphatases may have prognostic value in diseases such as prostate cancer.",
          "D. Lysosomal storage diseases such as Tay-Sachs result from unregulated activity of lysosomal enzymes.",
          "E. To better isolate their hydrolytic enzymes, lysosomes are resistant to fusion with other cell membranes."
        ],
        "answer": "C"
      },
      {
        "question_number": "26",
        "question": "A 56-year-old man is transferred from the county jail with complaints of hemoptysis, fever, and chills. The patient had undergone left lower lobectomy 6 years ago for an isolated lung nodule. Chest radiography on admission shows a lesion in the left upper lobe that is concerning for tuberculosis. The cell wall of Mycobacterium tuberculosis prevents lysosomes from fusing with phagosomes, which contributes to its tendency to lead to granuloma formation. Which of the following statements regarding endocytosis is not true?",
        "choices": [
          "A. Phagocytosis refers to engulfment of particulate matter.",
          "B. Pinocytosis refers to the engulfment of soluble material.",
          "C. Only specialized cells of the immune system are capable of endocytosis.",
          "D. Opsonins increase the likelihood of phagocytosis by binding to the antigen.",
          "E. Antibodies and complement fragments can serve as opsonins."
        ],
        "answer": "C"
      },
      {
        "question_number": "27",
        "question": "For tumors with a high mitotic index indicative of active. growth, which portion of the cell cycle in the actively dividing cells is most sensitive to ionizing radiation?",
        "choices": [
          "A. S phase",
          "B. M phase",
          "C. G1 phase",
          "D. G2 phase",
          "E. All phases are equally radiosensitive."
        ],
        "answer": "B"
      },
      {
        "question_number": "28",
        "question": "Which of the following statements regarding oxidative phosphorylation and mitochondria is true?",
        "choices": [
          "A. Glycoproteins are transported into the mitochondrial matrix to facilitate oxidative phosphorylation.",
          "B. The citric acid cycle takes place within the inner mitochondrial membrane.",
          "C. Oxidative phosphorylation via ATP synthase converts adenosine diphosphate (ADP) to ATP.",
          "D. Electrochemical (proton) gradients provide the energy to power chemosmotic production of ATP.",
          "E. Mitochondrial DNA is almost exclusively paternally derived."
        ],
        "answer": "D"
      },
      {
        "question_number": "29",
        "question": "A 26-year-old with a history of type 2 neurofibromatosis is scheduled to undergo resection of an acoustic neuroma. The NF2 gene is located on the long arm of chromosome 22. Which of the following statements regarding chromosomes is not true?",
        "choices": [
          "A. The nucleus contains the entire cellular DNA.",
          "B. Histones compact and organize the DNA strands.",
          "C. Interactions between DNA and proteins expose specific genes and control their expression.",
          "D. During mitosis, the spindle apparatus attaches to the chromosome at the centromere.",
          "E. Telomeres maintain chromosomal length through the replication cycles."
        ],
        "answer": "A"
      },
      {
        "question_number": "30",
        "question": "Which enzyme is responsible for the catalysis of deoxynucle- oside triphosphates into DNA?",
        "choices": [
          "A. DNA helicase",
          "B. DNA ligase",
          "C. DNA polymerase",
          "D. DNA primase",
          "E. All of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "31",
        "question": "Which of the following statements regarding protein synthesis is not true?",
        "choices": [
          "A. Transcription of messenger RNA occurs in the nucleus.",
          "B. Messenger RNA moves from the nucleus to the cyto- plasm and attaches to free ribosomes in the cytoplasm.",
          "C. The enzyme RNA polymerase catalyzes the transcription of messenger RNA from DNA.",
          "D. Introns are placed into the DNA transcript by splicing.",
          "E. Posttranslational processing includes glycosylation and enzymatic cleavage."
        ],
        "answer": "D"
      },
      {
        "question_number": "32",
        "question": "Which of the following methods is most useful for determin- ing the RNA content of a sample?",
        "choices": [
          "A. Southern blotting",
          "B. Northern blotting",
          "C. Western blotting",
          "D. PCR",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "33",
        "question": "The three phases of wound healing, in order, are:",
        "choices": [
          "A. Inflammation, proliferation, and maturation",
          "B. Inflammation, proliferation, and contraction",
          "C. Eschar formation, inflammation, and maturation",
          "D. Fibrous exudate, granulation, and epithelialization",
          "E. Coagulation, granulation, and epithelialization"
        ],
        "answer": "A"
      },
      {
        "question_number": "34",
        "question": "Which of the following statements regarding wound healing is true?",
        "choices": [
          "A. Granulation tissue results from the cross-linking of coagulation debris.",
          "B. Fibroblasts migrate to the acute wound after the appear- ance of granulation tissue.",
          "C. Myoepithelial cell-derived growth factors cause fibroblast differentiation.",
          "D. It is during the proliferative phase that the scaffolding for tissue repair is laid.",
          "E. Mucopolysaccharide levels peak 6 weeks after injury."
        ],
        "answer": "D"
      },
      {
        "question_number": "35",
        "question": "How does von Willebrand factor VIII affect coagulation during the inflammatory phase of wound healing?",
        "choices": [
          "A. Von Willebrand factor causes platelets to adhere to intact endothelium.",
          "B. Integrin receptors require von Willebrand factor as a coenzyme.",
          "C. Von Willebrand factor stimulates megakaryocytes to produce platelets.",
          "D. Platelet-collagen contact requires von Willebrand factor VIII.",
          "E. Von Willebrand factor VIII facilitates collagen cross-linking."
        ],
        "answer": "D"
      },
      {
        "question_number": "36",
        "question": "Regarding polymorphonucleocytes (PMN) and macrophages, which statement is true?",
        "choices": [
          "A. PMNs are essential for wound healing.",
          "B. Macrophages are essential for wound healing.",
          "C. Both PMNs and macrophages are essential for wound healing.",
          "D. M1 macrophages predominate in the proliferative phase.",
          "E. Macrophages are phenotypically stable."
        ],
        "answer": "B"
      }
    ],
    "Chapter 3: Hemostasis and Transfusion": [
        {
        "question_number": "1",
        "question": "Which of the following is an antifibrinolytic agent used in regular clinical practice?",
        "choices": [
          "A. Unfractionated heparin (UFH)",
          "B. Tranexamic acid (TXA)",
          "C. Protamine sulfate",
          "D. Tissue plasminogen activator (tPA)",
          "E. Plasminogen activator inhibitor-1 (PAI-1)"
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "Placement of an inferior vena cava (IVC) filter in patients with proximal lower extremity deep-vein thrombosis (DVT) is indicated in each of the following scenarios except:",
        "choices": [
          "A. Known large esophageal varices",
          "B. Pulmonary embolus despite therapeutic anticoagulation",
          "C. High-risk sonographic appearance of the proximal DVT",
          "D. Recurrent unprovoked DVT",
          "E. Severe congestive heart failure"
        ],
        "answer": "D"
      },
      {
        "question_number": "3",
        "question": "Dosing for therapeutic anticoagulation of which of the following modalities is least affected by renal impairment?",
        "choices": [
          "A. Warfarin",
          "B. Low-molecular-weight heparin",
          "C. UFH",
          "D. Rivaroxaban (Xarelto)",
          "E. Dabigatran (Pradaxa)"
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "Which of the following statements about resuscitation for hemorrhagic shock is true?",
        "choices": [
          "A. Blood products should be used as the initial resuscitative fluid in hemodynamically unstable patients.",
          "B. A balanced transfusion ratio (1:1:1) between packed red blood cells (PRBCs), fresh-frozen plasma (FFP), and platelets (PLTs) reduces the severity of coagulopathy in hemorrhagic shock.",
          "C. Patients with circulating factor levels 50% of the normal will show clinically impaired hemostasis.",
          "D. Addition of TXA to massive transfusion protocols comes with an increased risk of thrombotic complications.",
          "E. Albumin-containing solutions have a proven mortality benefit over crystalloid fluids in the resuscitation of hypovolemic shock."
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "A unit of blood could be transfused most rapidly through which of the following vascular access catheters?",
        "choices": [
          "A. A 7-Fr, 16-cm, triple-lumen catheter in the right internal jugular vein (lumens: 16, 18, 18 gauge)",
          "B. A 7-Fr, 30-cm, triple-lumen catheter in the right internal jugular vein (lumens: 16, 18, 18 gauge)",
          "C. An 18-gauge catheter peripherally inserted into the cephalic vein at the wrist",
          "D. A 16-gauge, 3-cm peripheral IV in the right antecubital fossa",
          "E. An 18-gauge, 3-cm peripheral IV in the right antecubital fossa"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "Transfusion of a unit of PRBCs into a hemodynamically stable patient with hemoglobin 7.5 g/dL does which of the following?",
        "choices": [
          "A. Increases systemic oxygen delivery (DO2)",
          "B. Increases tissue extraction of oxygen",
          "C. Increases systemic oxygen uptake (VO2)",
          "D. Increases arterial O2 saturation (SaO2)",
          "E. Decreases venous O2 saturation (SvO2)"
        ],
        "answer": "A"
      },
      {
        "question_number": "7",
        "question": "Impaired platelet aggregation in uremia is responsive to all of the following except:",
        "choices": [
          "A. Hemodialysis",
          "B. Cryoprecipitate",
          "C. DDAVP",
          "D. Platelet transfusion",
          "E. Desmopressin"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Which of the following is most indicative of heparin-induced thrombocytopenia (HIT) in a patient undergoing an elective procedure without a past medical history?",
        "choices": [
          "A. Platelet counts falling by 50% by postoperative day 7 to a nadir of 100K",
          "B. Platelet counts falling over 90% by postoperative day 7 to a nadir of 5K",
          "C. Platelet counts falling by 50% by postoperative day 3 to a nadir of 40K",
          "D. Low levels of serotonin release in response to therapeutic heparin exposure in laboratory assays",
          "E. Negative enzyme-linked immunosorbent assay (ELISA) for antiplatelet factor 4 immunoglobulins"
        ],
        "answer": "A"
      },
      {
        "question_number": "9",
        "question": "Which of the following is not a proven etiology of dissemi- nated intravascular coagulation (DIC)?",
        "choices": [
          "A. Gram-negative sepsis",
          "B. Trauma",
          "C. Retained products of conception",
          "D. Malignancy",
          "E. Supratherapeutic UFH drip"
        ],
        "answer": "E"
      },
      {
        "question_number": "10",
        "question": "Which of the following is false regarding the factor V Leiden mutation?",
        "choices": [
          "A. Both heterozygous and homozygous mutations are associated with increased rates of VTE.",
          "B. Carriers with provoked DVTs are generally managed with the same therapeutic regimen as noncarriers.",
          "C. The hypercoagulable state associated with the mutation is readily detectable on standard clinical coagulation assays as a shortened prothrombin time (PT).",
          "D. Although the structural mutation is on factor V, it impacts the functional activity of activated protein C.",
          "E. Roughly 5% of the American population is heterozygous, with the highest prevalence in Caucasians."
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "Heparin acts principally through which mechanism?",
        "choices": [
          "A. Indirect inhibition of factors II and X through antithrom- bin III activation",
          "B. Direct inhibition of thrombin",
          "C. Direct degradation of cross-linked fibrin clots",
          "D. Inhibition of platelet aggregation",
          "E. Inhibition of platelet adhesion to exposed tissue collagen during primary hemostasis"
        ],
        "answer": "A"
      },
      {
        "question_number": "12",
        "question": "Gelatin sponge (Gelfoam), oxidized cellulose (Surgicel), fibrin sealants (Tisseel, Evicel), and topical thrombin all have what in common?",
        "choices": [
          "A. They are grossly resorbable.",
          "B. They have intrinsic hemostatic activity.",
          "C. They are derived from human tissue.",
          "D. They should be used for definitive control of anastomotic bleeding.",
          "E. They directly generate fibrin clots."
        ],
        "answer": "A"
      },
      {
        "question_number": "13",
        "question": "Which of the following is most clearly diagnostic for lower extremity DVT in an ICU patient?",
        "choices": [
          "A. Venous duplex study with incompressibility and sluggish flow through the external iliac vein",
          "B. Venous duplex study with incompressibility and sluggish flow through the great saphenous vein below the knee",
          "C. Computed tomography (CT) of the lower extremities with a thrombus in the external iliac",
          "D. Elevated circulating D-dimer",
          "E. Unilateral leg swelling"
        ],
        "answer": "A"
      },
      {
        "question_number": "14",
        "question": "The following groups of patients have a biochemically evident hypercoagulable state along with increased incidence of clinically relevant VTE except:",
        "choices": [
          "A. Patients with sickle cell anemia",
          "B. Children with essential hypertension",
          "C. Patients with solid-organ malignancy",
          "D. Diabetics",
          "E. Smokers"
        ],
        "answer": "B"
      },
      {
        "question_number": "15",
        "question": "In patients with acute DVT, treatment with novel anticoagu- lants compared with vitamin K antagonists such as Coumadin showed:",
        "choices": [
          "A. Higher incidence of DVT recurrence",
          "B. Lower incidence of PE",
          "C. Higher incidence of significant bleeding complications",
          "D. Lower incidence of significant bleeding complications",
          "E. Lower incidence of all-cause mortality"
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "Which of the following coagulation assays is used clinically to detect a hyperfibrinolytic state?",
        "choices": [
          "A. PT",
          "B. aPTT",
          "C. Bleeding time",
          "D. Thromboelastography",
          "E. Activated clotting time"
        ],
        "answer": "D"
      },
      {
        "question_number": "17",
        "question": "Which of the following does not assist in hemostasis of massively bleeding trauma patients?",
        "choices": [
          "A. Permissive hypotension",
          "B. Crystalloid resuscitation",
          "C. Active warming",
          "D. Recombinant factor VII",
          "E. Balanced transfusion ratio (platelets: FFP:PRBC)"
        ],
        "answer": "B"
      },
      {
        "question_number": "18",
        "question": "The overall incidence, in terms of events per units transfused, of transfusionrelated acute lung injury (TRALI) is closest to:",
        "choices": [
          "A. 1 in 10",
          "B. 1 in 100",
          "C. 1 in 1000",
          "D. 1 in 10,000",
          "E. 1 in 100,000"
        ],
        "answer": "D"
      },
      {
        "question_number": "19",
        "question": "A patient with previously unrecognized gram-negative sepsis begins to bleed from peripheral IV catheter sites and is noted to have prolonged PT and aPTT along with a fibrinogen of 120 mg/dL. The most effective treatment for this patient's coagulopathy is:",
        "choices": [
          "A. IV antibiotics and fluid resuscitation",
          "B. PRBC transfusion",
          "C. Desmopressin",
          "D. FFP",
          "E. All of the above"
        ],
        "answer": "A"
      },
      {
        "question_number": "20",
        "question": "Which of the following is false about fibrinogen?",
        "choices": [
          "A. Circulating levels are on average higher in children than in adults.",
          "B. It is a scaffold for infiltration of inflammatory cells into a healing wound.",
          "C. Circulating levels decrease in direct proportion to the total blood loss in hemorrhage.",
          "D. Pure fibrinogen may be delivered to bleeding patients as a reconstituted solution.",
          "E. It is a negative acute-phase reactant."
        ],
        "answer": "E"
      },
      {
        "question_number": "21",
        "question": "With regard to normal hemostasis, which of the following statements is true?",
        "choices": [
          "A. Vascular disruption is followed by vasoconstriction mediated by vasoactive substances released by activated platelets.",
          "B. Platelet adhesion is mediated by fibrin monomers.",
          "C. The intact endothelial surface supports platelet adhesion and thrombus formation.",
          "D. Heparin inhibits ADP-stimulated platelet aggregation.",
          "E. A prolonged bleeding time may be due to thrombocyto- penia, a qualitative platelet defect, or reduced amounts of vWF."
        ],
        "answer": "E"
      },
      {
        "question_number": "22",
        "question": "With regard to drug effects and platelet function, which of the following statements is true?",
        "choices": [
          "A. Vasodilators such as prostaglandin E1 (PGE1), prostacy- clin (PG12), theophylline, and dipyridamole elevate cyclic adenosine monophosphate (CAMP) levels and block platelet aggregation.",
          "B. Aspirin and indomethacin interfere with platelet release of ADP and inhibit aggregation.",
          "C. Furosemide competitively inhibits PGE2.",
          "D. The effect of aspirin is reversible in 2 to 3 days.",
          "E. Aspirin will decrease platelet counts, but bleeding time is unchanged."
        ],
        "answer": "A"
      },
      {
        "question_number": "23",
        "question": "With regard to measurement of bleeding times, which of the following statements is true?",
        "choices": [
          "A. Spontaneous bleeding may occur with platelet counts higher than 15,000/μL",
          "B. Platelet counts higher than 150,000/μL exclude the possibility of a primary hemostatic disorder.",
          "C. Bleeding time is a predictor of surgical bleeding.",
          "D. Platelet counts higher than 50,000/μL are usually associated with a normal bleeding time and adequate surgical hemostasis.",
          "E. Normal bleeding time excludes von Willebrand disease as a potential factor affecting surgical hemostasis."
        ],
        "answer": "D"
      },
      {
        "question_number": "24",
        "question": "With regard to classic hemophilia (hemophilia A), which of the following statements is true?",
        "choices": [
          "A. The incidence in the general population is 1 in 1000.",
          "B. A given patient's baseline factor VIII or IX level may fluctuate with stress.",
          "C. Muscle compartment bleeding is the most common orthopedic problem.",
          "D. Factor VIII replacement therapy is required before any elective surgery.",
          "E. Therapy with cryoprecipitate plasma is free of risk for hepatitis."
        ],
        "answer": "D"
      },
      {
        "question_number": "25",
        "question": "A 12-year-old boy with known factor VIII deficiency has a painful, swollen, immobile right knee. The clinician suspects hemarthrosis. Therapeutic options include which of the following?",
        "choices": [
          "A. Immediate aspiration and compression dressings to prevent cartilage necrosis",
          "B. Compression dressings and immobilization to prevent further bleeding",
          "C. Immediate aspiration after appropriate factor VIII replacement therapy",
          "D. Initial trial of factor VIII therapy, compression dressings, cold packs, and rest followed by active range-of-motion exercises",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "26",
        "question": "With regard to von Willebrand disease, which of the following statements is true?",
        "choices": [
          "A. It is more common than hemophilia.",
          "B. It is best treated with cryoprecipitate plasma.",
          "C. Factor VIII levels are constant over time in a given patient.",
          "D. Bleeding after elective surgery is rare.",
          "E. All types of von Willebrand diseases can be effectively treated with desmopressin"
        ],
        "answer": "A"
      },
      {
        "question_number": "27",
        "question": "With regard to polycythemia vera, which of the following statements is not true?",
        "choices": [
          "A. Spontaneous thrombosis is a complication of polycythe- mia vera.",
          "B. Spontaneous hemorrhage is a possible complication of polycythemia vera.",
          "C. The reason for bleeding is a deficit in platelet function.",
          "D. A hematocrit of less than 48% and a platelet count of less than 400,000/μL are desirable before an elective opera- tion is performed on a patient with polycythemia vera.",
          "E. Postoperative complication rates may be as high as 60%."
        ],
        "answer": "E"
      },
      {
        "question_number": "28",
        "question": "In cirrhotic patients who are actively bleeding, the coagulopa- thy of end-stage liver disease can be differentiated from DIC most readily by estimation of which of the following factors?",
        "choices": [
          "A. Factor II",
          "B. Factor IX",
          "C. Factor VII",
          "D. Factor VIII:C",
          "E. Factor X"
        ],
        "answer": "D"
      }
    ],
    "Chapter 4: Nutrition, Metabolism, and Fluid and Electrolytes": [
      {
        "question_number": "4",
        "question": "An elderly patient with adult-onset diabetes mellitus is admitted to the hospital with severe pneumonia. The patient would not be expected to develop:",
        "choices": [
          "A. Hypokalemia",
          "B. Hyperkalemia",
          "C. Nonketotic hyperosmolar coma",
          "D. Hypophosphatemia",
          "E. Hyponatremia"
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "An asymptomatic patient is found to have a serum calcium level of 13.5 mg/dL. Which of the following medications should be avoided?",
        "choices": [
          "A. Bisphosphonates",
          "B. Thiazide diuretics.",
          "C. Mithramycin",
          "D. Calcitonin",
          "E. Corticosteroids"
        ],
        "answer": "B"
      },
      {
        "question_number": "6",
        "question": "Which of the following statements regarding the distribution, composition, and osmolarity of body fluid compartments is true?",
        "choices": [
          "A. A majority of intracellular water resides in adipose tissue.",
          "B. The principal intracellular anions are proteins and phosphates.",
          "C. Sodium determines the effective osmotic pressure between the interstitial and intravascular (plasma) fluid compartments.",
          "D. Calcium greatly determines the effective osmotic pressure between the intracellular fluid (ICF) and ECF compartments.",
          "E. The principal intracellular cation is calcium."
        ],
        "answer": "B"
      },
      {
        "question_number": "7",
        "question": "Which of the following conditions is associated with hypernatremia?",
        "choices": [
          "A. Adrenal insufficiency",
          "B. Tumor lysis syndrome",
          "C. Marked hyperglycemia",
          "D. Stevens-Johnson syndrome",
          "E. Excessive loop diuretic administration"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Which of the following humoral factors increases arterial vasodilation while not decreasing protein permeability in the capillary membranes?",
        "choices": [
          "A. Bradykinin",
          "B. Nitric oxide (NO)",
          "C. Atrial natriuretic factor",
          "D. Histamine",
          "E. Platelet-activating factor"
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "A 55-year-old female with a small bowel obstruction is found to have a serum potassium level of 2.8 mmol/L. Her hypokalemia is refractory to aggressive repletion. Which of the following is true?",
        "choices": [
          "A. The patient will likely suffer from flaccid paralysis and respiratory compromise until her potassium level is increased to at least 3.0 mmol/L.",
          "B. An electrocardiogram will likely show peaked T waves.",
          "C. Intravenous potassium repletion with a rate of 80 mEq/h should improve her condition.",
          "D. Hypomagnesemia could contribute to her problem.",
          "E. Hypokalemia results in hypopolarization of the resting potential of the cell."
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "A 70-kg man is nil per os and receiving maintenance intravenous fluids in the form of 5% dextrose in 0.45% saline after gastrointestinal surgery. Which of the following is true regarding his fluid and electrolyte requirements?",
        "choices": [
          "A. His daily water need is 4000 mL.",
          "B. His sodium requirement is 1 g/day.",
          "C. His potassium requirement is 50 mEq/day",
          "D. Average urine volume is 3000 mL.",
          "E. If he were febrile, his average increase in insensible loss would be 250 mL/day for each degree of fever."
        ],
        "answer": "E"
      },
      {
        "question_number": "11",
        "question": "Which of the following statements regarding hypervolemia in postoperative patients is true?",
        "choices": [
          "A. Hypervolemia can be produced by the administration of isotonic salt solutions in amounts that exceed the loss of volume.",
          "B. Acute overexpansion of the ECF space is typically not well tolerated in healthy individuals.",
          "C. Excess administration of normal saline can result in metabolic derangement, most commonly hyperchloremic metabolic alkalosis.",
          "D. The most reliable sign of volume excess is peripheral edema.",
          "E. Daily weight measurement in the postoperative period does not help determine fluid status."
        ],
        "answer": "A"
      },
      {
        "question_number": "12",
        "question": "With regard to potassium, which of the following statements is true?",
        "choices": [
          "A. Normal dietary intake of potassium is 150 to 200 mEq/day.",
          "B. In patients with normal renal function, most ingested potassium remains in the extracellular space.",
          "C. More than 90% of the potassium in the body is located in the extracellular compartment.",
          "D. Critical hyperkalemia (>6 mEq/L) is rarely encountered if renal function is normal.",
          "E. Administration of sodium bicarbonate shifts potassium from the ICF to the ECF."
        ],
        "answer": "D"
      },
      {
        "question_number": "13",
        "question": "Which of the following electrocardiographic (ECG) findings is associated with hyperkalemia?",
        "choices": [
          "A. Inverted T waves",
          "B. Shortened PR interval",
          "C. Peaked P waves",
          "D. Narrowing of the QRS complex",
          "E. T waves higher than R waves in more than one lead"
        ],
        "answer": "E"
      },
      {
        "question_number": "14",
        "question": "With regard to postoperative hyponatremia, which of the following statements is true?",
        "choices": [
          "A. It does not occur when water is used to replace sodium- containing fluids because intracellular reserves often replace these losses.",
          "B. In patients with head injury, hyponatremia despite adequate salt administration is usually caused by occult renal dysfunction.",
          "C. In oliguric patients, cellular catabolism with resultant metabolic acidosis increases cellular release of water and can contribute to hyponatremia.",
          "D. Hyperglycemia is not a cause of hyponatremia.",
          "E. Patients with salt-wasting nephropathy usually have abnormal blood urea nitrogen and creatinine values."
        ],
        "answer": "C"
      },
      {
        "question_number": "15",
        "question": "Which of the following statements regarding changes in volume status of the ECF compartment is true?",
        "choices": [
          "A. Hyponatremia is diagnostic of excess ECF volume.",
          "B. Hypernatremia is diagnostic of depletion of ECF volume.",
          "C. Excess extracellular volume is usually iatrogenic or due to renal or cardiac failure.",
          "D. Central nervous system symptoms appear after tissue signs with acute volume loss.",
          "E. The concentration of serum sodium is directly related to extracellular volume."
        ],
        "answer": "C"
      },
      {
        "question_number": "16",
        "question": "With regard to hypokalemia, which of the following statements is true?",
        "choices": [
          "A. It is less common than hyperkalemia in surgical patients.",
          "B. Respiratory acidosis is associated with increased renal potassium loss.",
          "C. Hypokalemia can cause increased deep tendon reflexes.",
          "D. Flattened T waves and a prolonged QT interval are associated with hypokalemia.",
          "E. Intravenous potassium administration should not exceed 10 to 20 mEq/h"
        ],
        "answer": "D"
      },
      {
        "question_number": "17",
        "question": "With regard to abnormalities in serum sodium concentration, which of the following statements is true?",
        "choices": [
          "A. Changes in serum sodium concentration usually produce changes in the status of ECF volume.",
          "B. The chloride ion is the main determinant of the osmolar- ity of the ECF space.",
          "C. Extracellular hyponatremia leads to depletion of intracel- lular water.",
          "D. Dry, sticky mucous membranes are characteristic of hyponatremia.",
          "E. Preservation of normal ECF has higher precedence than maintenance of normal osmolality."
        ],
        "answer": "A"
      },
      {
        "question_number": "18",
        "question": "A 45-year-old alcoholic man is found to have hypomagnese- mia. Which of the following statements about magnesium is true?",
        "choices": [
          "A. The distribution of nonosseous magnesium is similar to that of sodium.",
          "B. Calcium deficiency cannot be adequately corrected until the hypomagnesemia is addressed.",
          "C. Magnesium depletion is characterized by depression of the neuromuscular and central nervous systems.",
          "D. Magnesium supplementation should be stopped as soon as the serum level has normalized.",
          "E. The treatment of choice for magnesium deficiency is oral magnesium phosphate."
        ],
        "answer": "B"
      },
      {
        "question_number": "19",
        "question": "Which of the following clinical situations can be associated with hypovolemic hyponatremia?",
        "choices": [
          "A. CHF",
          "B. SIADH",
          "C. Cirrhosis",
          "D. Hyperglycemia",
          "E. Gastrointestinal losses"
        ],
        "answer": "E"
      },
      {
        "question_number": "20",
        "question": "With regard to intraoperative management of fluids, which of the following statements is true?",
        "choices": [
          "A. In a healthy person, up to 500 mL of blood loss may be well tolerated without the need for blood replacement.",
          "B. During an operation, functional ECF volume is directly related to the volume lost to suction.",
          "C. Functional ECF losses should be replaced with plasma.",
          "D. Administration of albumin plays an important role in the replacement of functional ECF volume loss.",
          "E. Operative blood loss is usually overestimated by the surgeon."
        ],
        "answer": "A"
      },
      {
        "question_number": "21",
        "question": "Which of the following statements regarding total body water is true?",
        "choices": [
          "A. In males, approximately 40% of total body weight is water.",
          "B. The percentage of total body weight that is water is higher in females than in males.",
          "C. Obese individuals have a greater proportion of water (relative to body weight) than lean individuals.",
          "D. The percentage of total body water decreases with age.",
          "E. The majority of body water is contained within the interstitial fluid compartments."
        ],
        "answer": "D"
      },
      {
        "question_number": "22",
        "question": "A 62-year-old female takes 40 mg of furosemide twice daily for hypertension and CHF. Which of the following is true?",
        "choices": [
          "A. Loop diuretics act on the distal convoluted tubule in the nephron.",
          "B. Magnesium is affected by loop diuretics.",
          "C. Fatigue and muscle weakness are not side effects of her medication.",
          "D. Loop diuretics decrease venous capacitance.",
          "E. Loop diuretics are agonists to the sodium-potassium- chloride cotransporter."
        ],
        "answer": "B"
      },
      {
        "question_number": "23",
        "question": "With regard to distributional shifts during an operation, which of the following statements is true?",
        "choices": [
          "A. The surface area of the peritoneum is not large enough to account for significant thirdspace loss.",
          "B. Approximately 1 to 1.5 L/h of fluid is needed during an operation.",
          "C. Blood is replaced as it is lost, without modification of the basal operative fluid replacement rate.",
          "D. Sequestered ECF is predominantly hypotonic.",
          "E. A major stimulus to ECF expansion is peripheral vasoconstriction."
        ],
        "answer": "C"
      },
      {
        "question_number": "24",
        "question": "With regard to perioperative fluid management, which of the following statements is correct?",
        "choices": [
          "A. Insensible loss is approximately 600 mL/day.",
          "B. Intraoperative insensible losses from an open abdomen are less than 250 mL/h.",
          "C. About 200 to 300 mL of fluid is needed to excrete the catabolic end products of metabolism.",
          "D. Lost urine should be replaced milliliter for milliliter.",
          "E. Hypermetabolism and hyperventilation are not important factors in postoperative fluid loss or management."
        ],
        "answer": "A"
      },
      {
        "question_number": "25",
        "question": "Which of the following has no effect on the development of hypernatremia?",
        "choices": [
          "A. Excessive sweating",
          "B. Hyperlipidemia",
          "C. Lactulose",
          "D. Glycosuria",
          "E. Inadequate maintenance fluids"
        ],
        "answer": "B"
      },
      {
        "question_number": "26",
        "question": "With regard to diabetes insipidus, which of the following statements is true?",
        "choices": [
          "A. Diabetes insipidus causes hypervolemic hyponatremia.",
          "B. Central diabetes insipidus cannot be corrected by the administration of desmopressin.",
          "C. Treatment of diabetes insipidus requires correction of hypernatremia at a rate faster than 12 mEq/day.",
          "D. Alcohol intoxication can mimic diabetes insipidus.",
          "E. Lithium administration could induce central diabetes insipidus."
        ],
        "answer": "D"
      },
      {
        "question_number": "27",
        "question": "A postoperative patient has a serum sodium concentration of 125 mEq/L and a blood glucose level of 500 mg/dL (normal level, 100 mg/dL). What would the patient's serum sodium concentration be (assuming normal renal function and appropriate intraoperative fluid therapy) if blood glucose levels were normal?",
        "choices": [
          "A. 120 mEq/L",
          "B. 122 mEq/L",
          "C. 137 mEq/L",
          "D. 142 mEq/L",
          "E. 147 mEq/L"
        ],
        "answer": "C"
      },
      {
        "question_number": "28",
        "question": "Which one of the following is least useful in the immediate treatment of hyperkalemia?",
        "choices": [
          "A. Calcium salts",
          "B. Sodium bicarbonate",
          "C. Potassium-binding resins",
          "D. Glucose and insulin",
          "E. Hemodialysis"
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "Which one of the following is not associated with hypocalcemia?",
        "choices": [
          "A. Shortening of the QT interval",
          "B. Painful muscle spasms",
          "C. Perioral or fingertip tingling",
          "D. Seizures in children",
          "E. Prolongation of the QT interval"
        ],
        "answer": "A"
      },
      {
        "question_number": "30",
        "question": "Which one of the following clinical signs or symptoms is associated with serum sodium concentrations below 125 mEq/L?",
        "choices": [
          "A. Restlessness",
          "B. Hallucinations",
          "C. Tachycardia",
          "D. Hyperventilation",
          "E. Hyperthermia"
        ],
        "answer": "B"
      },
      {
        "question_number": "31",
        "question": "Which one of the following is not a stimulus for ECF expansion?",
        "choices": [
          "A. Hemorrhage leading to a reduction in blood volume",
          "B. Increased capillary permeability after major surgery",
          "C. Peripheral arterial vasoconstriction.",
          "D. Negative interstitial fluid hydrostatic pressure",
          "E. Colloid oncotic pressure"
        ],
        "answer": "C"
      },
      {
        "question_number": "32",
        "question": "A 70-year-old man with sepsis has a pH of 7.18. Which of the following statements is true regarding his metabolic acidosis?",
        "choices": [
          "A. Tissue hypoxia leads to increased oxidative metabolism.",
          "B. Acute compensation for metabolic acidosis is primarily renal.",
          "C. Metabolic acidosis results from the loss of bicarbonate or the gain of fixed acids.",
          "D. The most common cause of excess acid is prolonged nasogastric suction.",
          "E. Restoration of blood pressure with vasopressors corrects the metabolic acidosis associated with circulatory failure."
        ],
        "answer": "C"
      },
      {
        "question_number": "33",
        "question": "A 70-kg man with pyloric obstruction secondary to ulcer disease is admitted to the hospital for resuscitation after 1 week of prolonged vomiting. What metabolic disturbance is expected?",
        "choices": [
          "A. Hypokalemic, hyperchloremic metabolic acidosis",
          "B. Hyperkalemic, hypochloremic metabolic alkalosis",
          "C. Hyperkalemic, hyperchloremic metabolic acidosis",
          "D. Hypokalemic, hypochloremic metabolic alkalosis",
          "E. None of the above"
        ],
        "answer": "D"
      }
    ],
    "Chapter 5: Surgical Infection and Transmissible Diseases and Surgeons": [
      {
        "question_number": "1",
        "question": "On the eighth day after an exploratory laparotomy and bowel resection complicated by intraabdominal hypertension, a 65-year-old female who remains intubated in the intensive care unit (ICU) develops a fever of 102°F. An infectious workup reveals a new right lower lobe consolidation. When initiating antibiotic therapy for presumed ventilator-associ- ated pneumonia (VAP), which of the following does not treat Pseudomonas aeruginosa?",
        "choices": [
          "A. Cefepime",
          "B. Unasyn (ampicillin/sulbactam)",
          "C. Ticarcillin",
          "D. Aztreonam",
          "E. Ciprofloxacin"
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "A 67-year-old male remains in the hospital 1 week after undergoing a pancreaticoduodenectomy. He has two intraab- dominal closed-suction drains in place, as well as a left internal jugular triple lumen catheter; his Foley catheter was removed on the third postoperative day. On the seventh postoperative day, he becomes febrile to 101.5°F, and a fever workup reveals a growth of Enterococcus in two of two peripheral blood cultures. Which of the following is true regarding the diagnosis of a central line-associated bloodstream infection (CLABSI)?",
        "choices": [
          "A. It is preferential to begin empiric antimicrobial therapy prior to obtaining cultures.",
          "B. Catheter-site exudate, if present, should not be cultured when there is concern for a line-related bloodstream infection.",
          "C. The subcutaneous portion of the central venous catheter should be cultured, rather than the tip.",
          "D. Paired blood samples (one from the catheter and one from a peripheral vein, or alternatively from greater than two lumens of the same central venous catheter) growing the same organism at levels that meet catheter-related bloodstream infection criteria are required to diagnose a CLABSI",
          "E. Growth of greater than 10 colony-forming units (cfu) by semiquantitative (roll-plate) culture confirms catheter colonization."
        ],
        "answer": "D"
      },
      {
        "question_number": "3",
        "question": "Which of the following is true regarding the treatment of catheter-related bloodstream infections?",
        "choices": [
          "A. All catheters in cases of confirmed CLABSI should be removed; it is never appropriate to attempt to salvage the infected catheter.",
          "B. Empiric coverage of Candida should be initiated in bone marrow or solid organ transplant patients with presumed CLABSI.",
          "C. Empiric antibiotic therapy should include methicillin- resistant Staphylococcus aureus (MRSA) coverage as well as gram-negative rod (GNR) coverage, regardless of the severity of illness.",
          "D. Duration of antibiotic therapy in CLABSIs is timed from the day when empiric antibiotics were initiated.",
          "E. The location of a temporary central venous catheter (subclavian versus internal jugular versus femoral) has no influence on the empiric antibiotic agents that should be used."
        ],
        "answer": "B"
      },
      {
        "question_number": "4",
        "question": "A 78-year-old man with a history of urinary retention and a chronic indwelling urinary catheter is admitted to the hospital from his nursing home with a new-onset altered mental status, and a catheter-associated urinary tract infection (CAUTI) is suspected. Which of the following is true regarding CAUTIs?",
        "choices": [
          "A. A 7-day antibiotic treatment is adequate for patients whose symptoms respond promptly to treatment.",
          "B. A CAUTI can be sufficiently diagnosed by the presence of greater than 105 cfu/mL of at least one bacterial species in a urine specimen.",
          "C. Urine specimens being sent for culture can be obtained from the catheter bag.",
          "D. Pyuria is a specific indicator for urinary tract infections (UTIs).",
          "E. Proteus mirabilis is the most common organism cultured in CAUTIs."
        ],
        "answer": "A"
      },
      {
        "question_number": "5",
        "question": "A 57-year-old Asian American female presents to her hepatologist's office for monitoring of her known chronic hepatitis B infection. Which of the following sets of test results is consistent with chronic active hepatitis B infection?",
        "choices": [
          "A. Hepatitis B surface antigen (HBsAg)+ less than 6 months, hepatitis B surface antibody (HBsAb)-, immunoglobulin M (IgM) anti-HBc+, elevated aspartate transaminase (AST), and alanine transaminase (ALT)",
          "B. HBsAg+ greater than 6 months, HBsAb-, HBcAb+, hepatitis B virus (HBV) DNA>20,000 IU/mL, mildly elevated AST and ALT",
          "C. HBsAg+ greater than 6 months, hepatitis B e antigen (HBeAg)-, HBV DNA<2000 IU/mL, normal AST and ALT",
          "D. HBsAg, HBsAb+, HBcAb+, normal AST and ALT",
          "E. HBsAg, HBsAb+, HBcAb-, normal AST and ALT"
        ],
        "answer": "B"
      },
      {
        "question_number": "6",
        "question": "Match the antibiotic and its classical toxicity profile.",
        "choices": [
          "A. Vancomycin | a. Tendinopathy",
          "B. Aminoglycosides | b. Red man syndrome",
          "C. Isoniazid (INH) | c. Phototoxicity",
          "D. Fluoroquinolones | d. Hepatitis",
          "E. Tetracycline | e. Ototoxicity"
        ],
        "answer": "Ab, Be, Cd, D-a, E-c"
      },
      {
        "question_number": "7",
        "question": "Which of the following is not a Surgical Care Improvement Project (SCIP) measure for infection prevention in surgical patients?",
        "choices": [
          "A. The optimal timing for administration of prophylactic antibiotics is within 1 h of surgical incision.",
          "B. Prophylactic antibiotics should be discontinued within 24 h of the end of surgery; in cardiac surgery, this is lengthened to 48 h.",
          "C. Clippers are preferred to razors for preoperative hair removal, if necessary.",
          "D. Goal blood glucose in the first 48 h following surgery is less than 160 mg/dL.",
          "E. Patients should remain normothermic within the first hour following surgery."
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Match the surgical procedure with the most appropriate preoperative prophylactic antibiotic.",
        "choices": [
          "A. Elective laparoscopic cholecystectomy | a. Ertapenem",
          "B. Femoral to popliteal arterial bypass with graft | b. Clindamycin",
          "C. Cystoscopy with ureteral stent placement | c. None",
          "D. Right hemicolectomy | d. Cefazolin",
          "E. Parotidectomy | e. Ciprofloxacin"
        ],
        "answer": "Ac, Bd, Ce, D-a, E-b"
      },
      {
        "question_number": "9",
        "question": "A 68-year-old female has been admitted to the emergency room with recurrent Clostridium difficile colitis. Her first episode of C. difficile colitis was 3 months prior after receiving clindamycin for a mild episode of cellulitis. Two months ago, she had a second episode, treated again with full symptom resolution. On examination, her vital signs are normal and her abdomen is benign, with only mildly tender to deep palpation in the right lower quadrant. Laboratory results are notable for a leukocytosis of 13.4,000 cells per MCL with 86% neutrophils, mild hypokalemia, and positive C. difficile stool antigen. An abdominal film shows a colon of normal caliber. What is the most appropriate treatment for this patient?",
        "choices": [
          "A. Oral metronidazole 500 mg every 8 h for 10 to 14 days",
          "B. Intravenous (IV) metronidazole 500 mg every 8 h for 10 to 14 days",
          "C. Oral vancomycin 125 mg every 6 h for 10 to 14 days",
          "D. Oral vancomycin, in a tapered and pulsed fashion over approximately 5 to 7 weeks",
          "E. IV vancomycin 125 mg every 6 h for 10 to 14 days"
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "The patient in the question above is admitted and started on antibiotics, but her condition continues to deteriorate clinically over the next 2 days despite appropriate antibiotic therapy, probiotics, and supportive treatment. Her white blood cell (WBC) count continues to rise to 17.8 and creatinine increases to 1.5 from baseline of 0.8. She has a low-grade fever and marginal urine output, and her abdomen becomes distended, tympanic, and tender. An abdominal obstructive series shows dilation of the entire colon to 10 cm in diameter without evidence of pneumoperitoneum. Which of the following is not an acceptable course of action in treating severe C. difficile colitis?",
        "choices": [
          "A. Transitioning from pulsed to standard scheduled oral vancomycin 125 mg every 6 h with the addition of IV metronidazole 500 mg every 8 h",
          "B. Transitioning from pulsed to standard scheduled oral vancomycin 125 mg every 6 h with the addition of oral fidaxomicin 200 mg every 12 h",
          "C. Subtotal colectomy",
          "D. Diverting loop ileostomy with colonic lavage",
          "E. Metronidazole enemas"
        ],
        "answer": "E"
      },
      {
        "question_number": "11",
        "question": "Which of the following is true regarding the pathophysiology of C. difficile infection?",
        "choices": [
          "A. Antimicrobial agents with activity against C. difficile are equally as likely to result in C. difficile colitis as those without activity against C. difficile.",
          "B. A patient's inability to produce antibody to toxin A is a significant predictor of recurrent C. difficile infection.",
          "C. Advanced age is not considered a risk factor for develop- ment of clinical C. difficile infection.",
          "D. Studies have suggested that gastric acid suppression [i.e., use of proton pump inhibitors (PPIs) or H2 blockers] may be protective against the development of C. difficile infection.",
          "E. Alcohol-based hand sanitizers are effective in removing C. difficile spores after contact with an infected patient."
        ],
        "answer": "B"
      },
      {
        "question_number": "12",
        "question": "Which of the following is true regarding postoperative fever?",
        "choices": [
          "A. Urinalysis, urine culture, and chest x-ray must be obtained as part of a complete fever workup in postopera- tive patients within 72 h of operation.",
          "B. In a febrile postoperative patient, wound cultures should be obtained regardless of the appearance of the wound.",
          "C. Wound infections in the first 24 to 48 h are uncommon but, if present, are worrisome for group A streptococcal or clostridial infection.",
          "D. Fevers persisting for greater than 96 h postoperatively are expected in cases of diffuse intraabdominal infection, such as feculent peritonitis from diverticulitis, even with appropriate surgical management.",
          "E. All of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "13",
        "question": "A 25-year-old male remains nasotracheally intubated in the ICU while undergoing repeated debridements for Ludwig's angina. His infection appears to be adequately drained, although he still has persistent facial swelling. Sinusitis is expected. Which of the following is true regarding sinusitis in critically ill patients?",
        "choices": [
          "A. The most important risk factor for sinusitis in critically ill patients is a history of MRSA of the nares.",
          "B. Few sinus infections are polymicrobial; often, only one organism is isolated in culture.",
          "C. The most commonly isolated organism in sinusitis cultures is coagulase-negative S. aureus.",
          "D. Computed tomography (CT) scan of the sinuses is the most sensitive diagnostic imaging modality for sinusitis.",
          "E. Incidence of acute sinusitis in nasotracheally intubated patients is approximately 75% after 1 week."
        ],
        "answer": "D"
      },
      {
        "question_number": "14",
        "question": "A 24-year-old male presents to the emergency department after sustaining a puncture wound to his left foot 60 min prior to presentation. On examination, he has a small metal nail protruding from the plantar aspect of his left foot, with moderate surrounding erythema and a small amount of bleeding, but no significant purulence. He is unsure of his tetanus vaccination status. How should the issue of potential tetanus infection be addressed in this patient?",
        "choices": [
          "A. Local wound care only",
          "B. Local wound care, IV metronidazole or penicillin for 7 to 10 days",
          "C. Local wound care, IV metronidazole or penicillin for 7 to 10 days, tetanus toxoid",
          "D. Local wound care, IV metronidazole or penicillin for 7 to 10 days, tetanus toxoid, tetanus immunoglobulin",
          "E. No treatment"
        ],
        "answer": "D"
      },
      {
        "question_number": "15",
        "question": "Which of the following is true regarding tetanus infection?",
        "choices": [
          "A. Tetanus is caused by tetanus toxin, which is produced by C. tetani, an aerobic gram-positive bacillus.",
          "B. Tetanus infection has purely motor neuron effects.",
          "C. Tetanus-prone wounds include contaminated wounds (i.e., soil, saliva, and stool), crush wounds, or burn wounds.",
          "D. Tetanus immunoglobulin is indicated in any patient with an unknown tetanus vaccination history.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "16",
        "question": "A 62-year-old man with a history of chronic pancreatitis from alcohol abuse presents to the emergency department with complaints of fevers and abdominal pain. On examination, he is febrile to 100.8°F. He is jaundiced and has right upper quadrant tenderness. His liver enzymes are elevated with a new leukocytosis. A CT scan of the abdomen demonstrates cirrhotic liver morphology, calcifications along the pancreas, and a rim-enhancing hypoechoic liver lesion. Which of the following is true regarding the diagnosis of a pyogenic liver abscess (PLA)?",
        "choices": [
          "A. Most PLAs are found in the left hepatic lobe.",
          "B. The most common etiology of PLAs is seeding from another intraabdominal infection via the portal vein.",
          "C. Most PLAs are polymicrobial, and in the United States, E. coli is the most commonly isolated organism.",
          "D. Percutaneous drainage is recommended for all PLAs if the drainage is technically feasible.",
          "E. The classic triad of fever, right upper quadrant pain, and malaise is present in many patients with PLAs."
        ],
        "answer": "C"
      },
      {
        "question_number": "17",
        "question": "A 47-year-old man has been admitted to the burn ICU for 4 days after sustaining a 30% total body surface area (TBSA) burn, involving the neck, chest, bilateral upper extremities, and lower extremities, when he begins to clinically decom- pensate. Which of the following is suggestive or diagnostic of a burn wound sepsis?",
        "choices": [
          "A. Conversion of a partial-thickness burn to a full-thickness burn",
          "B. Fevers greater than 100.4°F",
          "C. Burn wound culture swab growing greater than 10^5 organisms per gram of tissue swabbed",
          "D. Inability to tolerate enteral tube feeds for greater than 24 h",
          "E. Failure to improve with broad-spectrum antibiotic administration"
        ],
        "answer": "A"
      },
      {
        "question_number": "18",
        "question": "Which of the following is not a classical clinical manifesta- tion of GAS infection?",
        "choices": [
          "A. Necrotizing soft tissue infection",
          "B. Acute rheumatic fever",
          "C. Toxic shock syndrome",
          "D. Pharyngitis",
          "E. Meningitis"
        ],
        "answer": "E"
      },
      {
        "question_number": "19",
        "question": "A 45-year-old man who underwent a splenectomy for immune thrombocytopenic purpura develops a fever. Which of the following is true regarding postsplenectomy sepsis?",
        "choices": [
          "A. A fever without other localizing symptoms of infection (such as cough and diarrhea) is usually not worrisome in postsplenectomy patients.",
          "B. Postsplenectomy sepsis is almost never seen in patients who complete the appropriate vaccinations.",
          "C. The most common organism implicated in postsplenec- tomy sepsis is Haemophilus influenzae.",
          "D. Initiation of empiric antibiotics should be delayed until cultures are obtained.",
          "E. Ceftriaxone and vancomycin are an appropriate empiric antibiotic regimen in an asplenic patient with fever."
        ],
        "answer": "E"
      },
      {
        "question_number": "20",
        "question": "Which of the following statements regarding the risk for postsplenectomy sepsis is true?",
        "choices": [
          "A. The indication for splenectomy has no bearing on a patient's risk for developing postsplenectomy sepsis.",
          "B. Adult splenectomy patients have a greater likelihood of developing postsplenectomy sepsis than do children or newborns who require a splenectomy.",
          "C. The risk for postsplenectomy sepsis is highest in the first year after splenectomy, but asplenic patients' increased risk for developing sepsis persists for approximately 10 years following splenectomy.",
          "D. The risk of sepsis is increased in splenectomy patients due to impaired cellular immunity.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "21",
        "question": "A patient with a recurrent duodenal ulcer is referred for surgical consultation. He has been having abdominal pain for the last 2 years. Fifteen months ago, upper endoscopy showed a duodenal ulcer. The patient was treated with ranitidine, and his condition improved, but the symptoms recurred. Upper endoscopy confirmed a recurrent ulcer, and the result of a Campylobacter-like organism (CLO) test was positive. The patient was treated with a combination of two antibiotics and a PPI for 2 weeks. Which of the following tests best assesses eradication of Helicobacter pylori after completion of treatment?",
        "choices": [
          "A. Urea breath test",
          "B. CLO test",
          "C. Biopsy and culture",
          "D. Serum antibody [by enzyme-linked immunosorbent assay (ELISA)]",
          "E. Stool antibody test"
        ],
        "answer": "A"
      },
      {
        "question_number": "22",
        "question": "Which of the following statements regarding anaerobic bacterial infections is true?",
        "choices": [
          "A. Anaerobic bacteria are normal inhabitants of the skin and mucous membranes.",
          "B. Bacteroides spp. are the most common isolates in intraabdominal anaerobic infections.",
          "C. If appropriate cultures are obtained, anaerobes are found in more than 75% of intraabdominal abscesses.",
          "D. Proper treatment of anaerobic infections consists of surgical drainage, debridement of necrotic tissue, and appropriate antibiotic therapy.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "23",
        "question": "Which of the following clinical situations or laboratory results requires systemic antifungal therapy?",
        "choices": [
          "A. A single positive blood culture result obtained from an indwelling intravascular catheter",
          "B. Candida identified from a drain",
          "C. Oral candidiasis",
          "D. Candida isolated from a drain culture in a patient who recently underwent surgery for colonic perforation",
          "E. Mucocutaneous candidiasis"
        ],
        "answer": "A"
      },
      {
        "question_number": "24",
        "question": "A 10-year-old boy who recently emigrated from Mexico has had a 2-day illness characterized by fever, odynophagia, dysphagia, and drooling at the mouth. Physical examination reveals the child to be in a toxic condition with a temperature of 102°F (38.9°C), tachycardia, and tachypnea. There is mild tenderness in the submandibular area and few palpable lymph nodes. The suspected diagnosis is epiglottitis, which is confirmed with a CT scan of the neck. Blood culture results are positive. What kind of organism will probably be seen on Gram stain?",
        "choices": [
          "A. Gram-positive cocci in pairs and chains",
          "B. Gram-positive cocci in clusters",
          "C. Slender GNRS",
          "D. Gram-negative coccobacilli",
          "E. Spirochetes"
        ],
        "answer": "D"
      },
      {
        "question_number": "25",
        "question": "Which of the following previously healthy patients scheduled for an operation should undergo human immunodeficiency virus (HIV) antibody testing?",
        "choices": [
          "A. A 35-year-old man seen for removal of a lipoma in the anterior triangle of the neck. A routine preoperative complete blood count reveals a WBC count of 4500 cells/ mL. with a normal differential, hemoglobin level of 13 g/ dL, and platelet count of 81,000/mL",
          "B. A 40-year-old man seen for repair of an inguinal hernia. Physical examination reveals white, adherent, nonremov- able plaques on the lateral aspect of his tongue",
          "C. A 28-year-old woman seen for the removal of a breast lump in whom a painful vesicular rash along the T8-10 dermatomes develops on the right side",
          "D. A 20-year-old man undergoing nephrectomy for living related-donor transplantation",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "26",
        "question": "Which of the following is true regarding the management of hepatic echinococcal disease?",
        "choices": [
          "A. Preoperative endoscopic retrograde cholangiopancreatogra- phy can be both diagnostic and therapeutic for cyst-biliary communication.",
          "B. Percutaneous drainage of hydatid cysts is contraindicated due to the risk for anaphylaxis.",
          "C. Surgical excision of hydatid cysts need not be preceded by antiparasitic chemotherapy.",
          "D. CT scan is the most sensitive imaging modality to identify communication between hydatid cysts and the biliary tree.",
          "E. Praziquantel is the preferred antiparasitic agent in hydatid cyst disease."
        ],
        "answer": "A"
      },
      {
        "question_number": "27",
        "question": "A diabetic patient has recently been discharged from the hospital after intracranial bleeding. He is readmitted for aspiration pneumonia. His condition deteriorates rapidly, with hypotension and multiorgan dysfunction. Which of the following treatments is contraindicated?",
        "choices": [
          "A. Volume resuscitation",
          "B. Antibiotics",
          "C. Activated protein C",
          "D. Intensive insulin therapy for hyperglycemia",
          "E. Low-dose hydrocortisone"
        ],
        "answer": "C"
      },
      {
        "question_number": "28",
        "question": "Endocarditis prophylaxis is recommended for which of the following patients?",
        "choices": [
          "A. A patient with mitral valve prolapse but without murmur who is undergoing lithotripsy for renal calculi",
          "B. A patient with a history of rheumatic fever and normal cardiac valves who is undergoing prostatic biopsy",
          "C. A patient with a prosthetic aortic valve who is undergo- ing pulmonary resection",
          "D. A patient with severe hypertrophic cardiomyopathy who is undergoing endoscopic retrograde cholangiography for biliary obstruction",
          "E. A patient previously treated for streptococcal endocarditis who is undergoing colonoscopy"
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "A patient is infected with HIV. His last CD4 T-lymphocyte count was 50 cells/mm3, and his viral load was 100,000 copies/ mL. He comes to the hospital with a sudden onset of right hemiparesis. He has been afebrile. A CT scan and magnetic resonance imaging (MRI) of the brain show multiple ring- enhancing lesions in the left cerebral hemisphere. The Toxo- plasma IgG antibody test result is positive. He has received pyrimethamine and sulfadiazine for 12 days. Neurologically, the patient is stable. Which of the following is the next best step?",
        "choices": [
          "A. Repeat MRI of the brain.",
          "B. Continue the same antibiotic therapy for an additional 10 days and reassess.",
          "C. Switch treatment to pyrimethamine with the addition of clindamycin and reassess whether the patient improves clinically in 10 to 14 days.",
          "D. Add corticosteroids to the treatment regimen.",
          "E. Perform a positron emission tomography (PET) or single-photon emission computed tomography (SPECT) scan."
        ],
        "answer": "A"
      },
      {
        "question_number": "30",
        "question": "Match each agent in the left-hand column with one or more mechanisms of antimicrobial action in the right-hand column.",
        "choices": [
          "A. Carbapenems | a. Impairment of bacterial DNA synthesis",
          "B. Aminoglycosides | b. Inhibition of cell wall synthesis",
          "C. Quinolones | c. Disruption of ribosomal protein synthesis",
          "D. Cephalosporins | d. Disruption of cell wall cation homeostasis",
          "E. Vancomycin | e. Disruption of the cytoplasmic membrane"
        ],
        "answer": "A-a; Bc, d C-a; D-b; E-b"
      },
      {
        "question_number": "31",
        "question": "Which of the following statements regarding diabetic foot infections is false?",
        "choices": [
          "A. Acute diabetic foot infections are often caused by gram-positive organisms.",
          "B. Chronic diabetic foot infections are polymicrobial.",
          "C. To diagnose an infection in a patient with a chronic wound, a foul odor and redness must be present.",
          "D. MRSA infections are associated with a worse outcome.",
          "E. Impaired host defenses allow low-virulence colonizers such as coagulase-negative staphylococci and Corynebac- terium spp. to become pathogens."
        ],
        "answer": "C"
      },
      {
        "question_number": "32",
        "question": "Which of the following regarding the treatment of diabetic foot infections is true?",
        "choices": [
          "A. Acute diabetic foot infections are caused by monomicro- bial gram-negative aerobes.",
          "B. The use of antibiotics for an uninfected chronic wound facilitates wound closure and prevents future infection.",
          "C. Sharp debridement of necrotic or unhealthy tissue prolongs wound healing and removes a potential reservoir for bacteria.",
          "D. Avoiding direct pressure on the wound facilitates healing.",
          "E. The administration of granulocyte-stimulating factors (GSFs) results in faster resolution of the infection."
        ],
        "answer": "D"
      },
      {
        "question_number": "33",
        "question": "Match each clinical characteristic or agent in the left-hand column with the correct infecting organism or organisms in the right-hand column. More than one answer may apply.",
        "choices": [
          "A. Fibrosing mediastinitis | a. Candida albicans",
          "B. Amphotericin | b. Nocardia asteroides",
          "C. Intertrigo | c. Actinomyces israelii",
          "D. Brain abscess | d. Cryptococcus neoformans",
          "E. Pelvic mass | e. Histoplasma capsulatum"
        ],
        "answer": "Ae Ba, d, e; C-a; D-b; E-c"
      },
      {
        "question_number": "34",
        "question": "Which of the following statements is correct regarding spontaneous bacterial peritonitis (SBP; primary peritonitis) in a cirrhotic patient?",
        "choices": [
          "A. Infection is usually polymicrobial.",
          "B. Ascitic fluid culture results are always positive.",
          "C. The most likely pathogenic mechanism is translocation from the gut.",
          "D. Twenty-one days of antibiotic treatment may be adequate.",
          "E. Infection-related mortality has declined to less than 10%."
        ],
        "answer": "E"
      },
      {
        "question_number": "35",
        "question": "Which of the following patients with cirrhosis benefit from prophylactic antibiotic therapy to decrease the risk for SBP?",
        "choices": [
          "A. Patients awaiting liver transplantation.",
          "B. Patients hospitalized with acute gastrointestinal bleeding",
          "C. Patients with ascitic fluid protein levels of greater than 1 g/100 mL",
          "D. Patients who have recovered from a previous episode of SBP",
          "E. Patients with ascitic fluid protein levels of less than 1 g/100 mL"
        ],
        "answer": "C"
      },
      {
        "question_number": "36",
        "question": "Which of the following statements regarding secondary peritonitis is false?",
        "choices": [
          "A. It usually occurs because of perforation of an intraab- dominal viscus.",
          "B. Carbapenems, aminoglycosides, and fourth-generation cephalosporins have equal efficacy in treatment studies.",
          "C. Increased age, cancer, cirrhosis, and systemic illness are factors that increase the mortality rate.",
          "D. Sequestration of bacteria within fibrin clots leads to intraabdominal abscess formation.",
          "E. The most common organism cultured from the abdomen is E. coli."
        ],
        "answer": "B"
      },
      {
        "question_number": "37",
        "question": "Which of the following statements regarding cytomegalovi- rus (CMV) infection and solid organ transplantation is false?",
        "choices": [
          "A. Symptomatic infection occurs 2 to 6 months after transplantation.",
          "B. Patients being treated for acute rejection are at an increased risk for the development of symptomatic CMV infection.",
          "C. Transmission can occur through the donor organ.",
          "D. Reactivation of latent infection is associated with the greatest risk for the development of severe disease.",
          "E. CMV infection may be associated with premature atherosclerosis in cardiac transplant patients."
        ],
        "answer": "D"
      },
      {
        "question_number": "38",
        "question": "A 28-year-old man who sustained closed-head trauma in a motor vehicle accident a month earlier comes to the emergency department with a 3-day history of progressive headache, fever, and confusion. His wife reports the recent onset of clear drainage from his left naris. Physical examina- tion reveals a temperature of 102°F (38.9°C), a stiff neck, and no rash. Which of the following statements concerning the patient is true?",
        "choices": [
          "A. He most likely has bacterial meningitis secondary to S. aureus.",
          "B. Antiretroviral prophylaxis has been beneficial in preventing bacterial meningitis after head trauma.",
          "C. Empiric antibiotics should include an extended-spectrum cephalosporin and vancomycin.",
          "D. Corticosteroid administration with antibiotics is not indicated.",
          "E. He requires immediate surgical intervention for repair of cerebrospinal fluid leakage."
        ],
        "answer": "C"
      },
      {
        "question_number": "39",
        "question": "Which of the following statements regarding hepatitis C virus (HCV) infection is false?",
        "choices": [
          "A. The prevalence of HCV infection in HCWs is similar to that in the general population.",
          "B. Chronic HCV infection occurs in 75%-85% of patients after acute infection.",
          "C. Hepatic failure because of chronic HCV infection is the most common indication for liver transplantation.",
          "D. Pegylated interferon plus ribavirin is an effective therapy for most patients with chronic HCV infection.",
          "E. Factors associated with the development of cirrhosis include male gender, alcohol use, and coinfection with HIV."
        ],
        "answer": "D"
      },
      {
        "question_number": "40",
        "question": "Which statement about Mycobacterium tuberculosis treatment and prophylaxis is true?",
        "choices": [
          "A. Two-drug treatment with INH and rifampin (RIF) for 9 months is standard therapy for active pulmonary TB.",
          "B. Treatment failure can be due to drug resistance or nonadherence.",
          "C. HIV-infected individuals require prolonged therapy for active TB.",
          "D. INH prophylaxis for latent TB is given for at least 12 months.",
          "E. INH prophylaxis should not be given to individuals with recent conversion from purified protein derivative (PPD)-negative to PPD-positive status."
        ],
        "answer": "B"
      },
      {
        "question_number": "41",
        "question": "Which of the following is true regarding the bacteriology of vascular graft infections?",
        "choices": [
          "A. S. epidermidis is the most commonly isolated organism.",
          "B. Fungal graft infections are uncommon, but when they do occur, they are most common in immunocompromised patients.",
          "C. Gram-negative organisms are implicated most frequently in thoracic aortic and carotid artery graft infections.",
          "D. Gram-negative infections are often less virulent and have fewer major complications than do gram-positive infections.",
          "E. None of the above."
        ],
        "answer": "B"
      },
      {
        "question_number": "42",
        "question": "Which of the following clinical scenarios raises concern for vascular graft infection?",
        "choices": [
          "A. New-onset gastrointestinal bleeding in a patient with a history of abdominal aortic endograft placement",
          "B. The presence of a draining sinus tract 3 cm distal to a forearm arteriovenous graft for hemodialysis",
          "C. A slowly growing pulsatile mass in the groin of a patient with a history of an aortofemoral bypass graft",
          "D. CT scan demonstrating the presence of a fluid collection adjacent to an abdominal aortic graft",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "43",
        "question": "Suspicion of OM in a diabetic foot ulcer should be raised in all of the following except:",
        "choices": [
          "A. A deep ulcer that overlies a bony prominence",
          "B. An ulcer that does not heal after 2 weeks of appropriate therapy",
          "C. A patient with a swollen foot and a history of foot ulceration",
          "D. Unexplained high WBC count or inflammatory markers in a patient with a diabetic foot ulcer",
          "E. Evidence of cortical erosion and periosteal reaction on plain radiography"
        ],
        "answer": "B"
      },
      {
        "question_number": "44",
        "question": "Which of the following is true regarding OM in a diabetic foot?",
        "choices": [
          "A. A nuclear medicine-tagged WBC scan is the best way to diagnose OM.",
          "B. The only reported successful treatment of OM includes resection of the infected bone.",
          "C. A presumptive diagnosis of OM cannot be made even if bone destruction is seen on plain film underneath an ulcer.",
          "D. A bone biopsy is often difficult to perform and invasive and should be avoided.",
          "E. Selected patients may benefit from implanted antibiotics, hyperbaric oxygen therapy, or revascularization."
        ],
        "answer": "E"
      },
      {
        "question_number": "45",
        "question": "Which of the following statements regarding hospital-acquired pneumonia (HAP), VAP, and health care-associated pneumonia (HCAP) is false?",
        "choices": [
          "A. They are the most common nosocomial infections.",
          "B. They are usually caused by aerobic gram-negative bacilli.",
          "C. They are rarely due to viral or fungal pathogens in immunocompetent patients.",
          "D. Infection resulting from aspiration is usually due to anaerobes.",
          "E. Gram-positive coccal isolates are more common patients with head trauma."
        ],
        "answer": "A"
      },
      {
        "question_number": "46",
        "question": "Which of the following are risk factors for HAP, VAP, or HCAP caused by multidrug-resistant pathogens?",
        "choices": [
          "A. Hospitalization for 5 or more days",
          "B. Antimicrobial therapy or hospitalization in the preceding 90 days",
          "C. Home wound care",
          "D. Immunosuppressive disease or therapy",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "47",
        "question": "Which of the following antimicrobial agents is considered safe in pregnancy?",
        "choices": [
          "A. Ganciclovir",
          "B. Albendazole",
          "C. Ketoconazole",
          "D. Streptomycin",
          "E. Erythromycin"
        ],
        "answer": "E"
      }
    ],
    "Chapter 6: Transplantation and Immunology": [
      {
        "question_number": "1",
        "question": "Which of the following statements regarding rejection of solid organ transplants is true?",
        "choices": [
          "A. Hyperacute rejection begins in the operating room with reperfusion of the transplanted organ.",
          "B. Liver transplants are especially susceptible to hyperacute rejection.",
          "C. Most immunosuppressive medications are used to prevent chronic rejection.",
          "D. The major cause of graft failure is acute rejection.",
          "E. Chronic rejection is characterized histologically by lymphocyte infiltration."
        ],
        "answer": "A"
      },
      {
        "question_number": "2",
        "question": "A 30-year-old woman with lupus receives a kidney transplant. Two hours later, she is anuric. Vital statistics of the kidney include cold ischemia time of 10 h, a 60-year old donor, a negative crossmatch, and panel-reactive antibody (PRA) of 80%. Select the best next step of management.",
        "choices": [
          "A. Immediate angiogram to evaluate for (and treat) an arterial occlusion",
          "B. Immediate sonographic studies to verify vessel patency",
          "C. Immediate reexploration",
          "D. Immediate administration of high-dose steroids to empirically treat rejection",
          "E. Magnetic resonance angiography to determine vessel patency"
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "A 30-year-old type 1 brittle diabetic patient with diabetic nephropathy receives a simultaneous pancreas and kidney (SPK) transplant. Which of the follow statements is true?",
        "choices": [
          "A. Elevation of plasma glucose levels in the early postopera tive period are indicative of pancreas rejection.",
          "B. Bladder drainage is preferred because it is associated with fewer complications.",
          "C. Most surgeons prefer enteric drainage because the incidence of complications attributed to bladder drainage, such as acidosis and urinary tract infections, is decreased.",
          "D. Most surgeons prefer bladder drainage because avoiding contamination with enteric contents reduces the incidence of infections.",
          "E. The preferred enteric drainage of the pancreatic allograft is the cecum."
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "Which of the following is true regarding allocation of liver allografts for transplantation?",
        "choices": [
          "A. Allocation of cadaveric liver allografts is dependent on model for end-stage liver disease (MELD), length of time on the waitlist, ABO compatibility, HLA compatibility, and PRA results.",
          "B. Allocation of cadaveric liver allografts for patients with hepatocellular carcinoma (HCC) requires the recipient to be on the waitlist for at least 6 months.",
          "C. Allocation of cadaveric liver allografts for status 1A or 1B candidates is immediately assigned a MELD score of 40, which is the highest score possible on the waitlist.",
          "D. Cadaveric renal or liver allografts with hepatitis C virus (HCV) are routinely allocated to both HCV-positive and HCV-negative recipients.",
          "E. The time-to-transplant on the waitlist has decreased since using the MELD score for cadaveric liver allograft allocation; however, there has been no significant change in the mortality rate while on the waitlist."
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "With respect to de novo postrenal transplant diabetes mellitus, which of the following statements is true?",
        "choices": [
          "A. It is more common in African-American recipients.",
          "B. Most patients inevitably require long-term insulin therapy.",
          "C. Risk factors include advanced age and previous history of hyperlipidemia.",
          "D. It has become less common since the introduction of tacrolimus.",
          "E. Its incidence does not correlate with steroid dosage."
        ],
        "answer": "A"
      },
      {
        "question_number": "6",
        "question": "Regarding liver transplantation for patients chronically infected with HCV, which of the following statements is true?",
        "choices": [
          "A. Posttransplant reinfection with HCV occurs in approxi mately 50% of patients.",
          "B. Posttransplant treatment of HCV is a contraindication due to the extensive drug interactions between DAAs and immunosuppressive agents.",
          "C. Posttransplant reinfection with HCV causes cirrhosis in approximately 80% of patients at 5 years after liver transplantation.",
          "D. The clinical course of HCV after reinfection is less virulent than that of the original infection.",
          "E. Allograft failure secondary to recurrence of HCV infection is currently the most common cause of death and retransplantation in recipients with HCV infection."
        ],
        "answer": "E"
      },
      {
        "question_number": "7",
        "question": "Which of the following statements regarding interleukins (ILs) is true?",
        "choices": [
          "A. All ILs upregulate the immune system.",
          "B. IL-8 is a neutrophil chemotactic factor.",
          "C. ILs are only produced by leukocytes.",
          "D. IL-10 produces fever and inflammation.",
          "E. Prednisone upregulates the effect of IL-1."
        ],
        "answer": "B"
      },
      {
        "question_number": "8",
        "question": "Which of the following statements is true regarding liver transplantation in the pediatric population?",
        "choices": [
          "A. HCC is the most common malignancy in children, leading to transplantation.",
          "B. Portoenterostomy for biliary atresia is inferior to liver transplant in infants; therefore if transplantation is an option, it is the optimal treatment.",
          "C. Inborn errors of metabolism with or without injury to the liver can be an indication for liver transplantation.",
          "D. Polycystic kidney and liver disease is the most common indication for liver transplantation in children.",
          "E. The two main grafts used for pediatric liver transplanta tion are an allograft from a pediatric donor of similar size or an adult donor’s right lobe."
        ],
        "answer": "C"
      },
      {
        "question_number": "9",
        "question": "A 40-year-old man who underwent kidney transplant 1 year ago is seen in the office with an enlarged groin lymph node. Labs show an elevated Epstein-Barr virus (EBV), and an excisional lymph node biopsy reveals B-cell posttransplant lymphoproliferative disorder (PTLD.) He is given acyclovir, and his immunosuppres sion is decreased; however, this treatment fails. What is the next best step?",
        "choices": [
          "A. Change immunosuppressive agents.",
          "B. Add radiation therapy to positive lymph node basins.",
          "C. Add rituximab.",
          "D. Perform transplant nephrectomy.",
          "E. Add cyclophosphamide, hydroxydaunomycin (doxorubi cin), oncovin (vincristine), and prednisone (CHOP)."
        ],
        "answer": "C"
      },
      {
        "question_number": "10",
        "question": "Liver transplantation may be contraindicated for which of the following?",
        "choices": [
          "A. A 42-year-old patient with cirrhosis and prior alcohol use 7 months ago",
          "B. A 60-year-old patient with a single, 5-cm-diameter HCC",
          "C. A 55-year-old patient with liver failure and uncorrected pulmonary hypertension",
          "D. A 37-year-old patient with liver failure and hepatopulmo nary syndrome",
          "E. A 52-year-old patient with liver failure and portal vein thrombosis"
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "After orthotopic liver transplantation (OLT) 10 years earlier for HCV cirrhosis, a 50-year-old man is hospitalized for fluid overload and is found to have a worsening renal function. If this is due to toxicity of an immunosuppressive agent, which of the following medications has the patient likely been taking?",
        "choices": [
          "A. Sirolimus (Rapamune)",
          "B. Tacrolimus (Prograf)",
          "C. Mycophenolate (Cellcept, Myfortic)",
          "D. Prednisone",
          "E. Azathioprine (Imuran)"
        ],
        "answer": "B"
      },
      {
        "question_number": "12",
        "question": "Which of the following statements regarding T cells is true?",
        "choices": [
          "A. T cells complete development in the thymus and then migrate to the bone marrow.",
          "B. The various types of T cells can be identified by the binding of specific monoclonal antibodies to antigens on the cell surface.",
          "C. Helper T cells can be activated to produce antibodies.",
          "D. Cytotoxic T cells can destroy target cells by recognizing foreign antigens at the target cell nucleus.",
          "E. Cell-mediated immunity can be transferred passively in serum."
        ],
        "answer": "B"
      },
      {
        "question_number": "13",
        "question": "Which of the following patients should be considered for the TIPS procedure?",
        "choices": [
          "A. A 45-year-old woman with portal hypertension causing bleeding esophageal varices; MELD score 14; she needed a blood transfusion and two endoscopies for variceal bleeding in the past 6 months.",
          "B. A 52-year-old with alcohol-related cirrhosis; MELD score 20; his liver disease is complicated by poorly controlled hepatic encephalopathy and ascites requiring paracentesis every other week.",
          "C. A 60-year-old woman with portal hypertension causing ascites; MELD score 15; she is on the maximum dose of diuretics and still requires paracentesis every other week.",
          "D. A 39-year-old woman with cirrhosis due to autoimmune hepatitis; MELD score 16; her liver disease is compli cated by recurrent hospitalizations for pleural effusion causing dyspnea for which she was started on a trial of diuretics.",
          "E. A 65-year-old man with HCV-related cirrhosis; MELD score 40; he is currently intubated in the intensive care unit (ICU) for hemorrhagic shock secondary to bleeding esophageal varices."
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "Which of the following is true regarding organ preservation for liver transplantation?",
        "choices": [
          "A. University of Wisconsin (UW) solution contains phosphate, which replenishes the depleted intracellular levels caused by degradation of adenosine triphosphate (ATP) during cold ischemia time.",
          "B. Hypothermic machine perfusion (HMP) has become the gold standard treatment for liver allografts from donation after cardiac death (DCD).",
          "C. UW solution contains lactobionic acid, which counteracts oxygen free radical production during reperfusion.",
          "D. It is better to perform the back-table liver dissection after packaging and travel time as opposed to immediately after organ procurement.",
          "E. Glutathione was added to UW solution in order to buffer the intracellular acidosis created during cold ischemia time."
        ],
        "answer": "D"
      },
      {
        "question_number": "15",
        "question": "Which of the following statements regarding TNF is true?",
        "choices": [
          "A. TNF-α is produced only by monocytes and macrophages.",
          "B. Release of TNF is stimulated by exotoxins.",
          "C. TNF enhances the anticoagulant activity of endothelial surfaces.",
          "D. TNF is responsible for the cachexia associated with metastatic disease.",
          "E. Glucocorticoids have essentially no effect on TNF-α expression."
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "Which statement is true regarding the pancreas allograft of an SPK transplantation?",
        "choices": [
          "A. Despite the increased risk of hemorrhage, some institu tions use heparin for anticoagulation after SPK to prevent the increased risk of allograft vascular thrombosis.",
          "B. Early hemorrhage after SPK is often from rupture of a pseudoaneurysm due to direct erosion by leaking pancreatic exocrine enzymes.",
          "C. Thrombosis is the most common indication for repeat laparotomy after SPK.",
          "D. Allograft pancreatitis is easily distinguishable from acute rejection based on specific CT scan findings and the magnitude in elevation of lipase and amylase levels.",
          "E. Acute rejection is the most common cause of early pancreas allograft failure after SPK."
        ],
        "answer": "A"
      },
      {
        "question_number": "17",
        "question": "A 60-year-old woman with end-stage renal disease (ESRD) on dialysis is blood type O, has a recent PRA result of 15%, and has now been offered a blood type O cadaveric renal transplant. The crossmatch on this potential donor is positive. Which of the following statements is true?",
        "choices": [
          "A. A positive crossmatch indicates a higher likelihood that this patient will inevitably suffer graft loss from chronic cellular rejection.",
          "B. A positive crossmatch is an absolute contraindication to cadaveric renal transplantation.",
          "C. Additional immunotherapy can prevent hyperacute rejection and should be given to this patient in the perioperative period.",
          "D. This patient’s low PRA result typically predicts a higher likelihood of donor-specific antibodies.",
          "E. This patient’s sister is blood type A and wishes to be a living related kidney donor for her. This is a valid option because ABO incompatibility is no longer an absolute contraindication to kidney transplantation."
        ],
        "answer": "E"
      },
      {
        "question_number": "18",
        "question": "A 62-year-old woman comes to the emergency department complaining of nausea and vomiting. She underwent OLT for alcoholic cirrhosis 5 weeks earlier. Her white blood cell count is 1.0 cell/mL. Which of the following is the most likely cause of her clinical symptoms?",
        "choices": [
          "A. Wound infection",
          "B. CMV",
          "C. Pneumonia",
          "D. Bowel obstruction",
          "E. Rejection"
        ],
        "answer": "B"
      },
      {
        "question_number": "19",
        "question": "A 58-year-old man with HCV cirrhosis undergoes an OLT and receives induction immunosuppression with rabbit antithymocyte globulin (rTAG). Regarding rTAG, which of the following statements is true?",
        "choices": [
          "A. It competitively binds IL-2 receptors without activating it, thereby blocking IL-2 stimulation of T cells.",
          "B. The cytokine release syndrome associated with rTAG administration cannot be prevented; however, it resolves within a short period of time.",
          "C. Serum sickness is a common side effect whose occur rence peaks approximately 48 h after the first administra tion of rTAG.",
          "D. It causes a depletion of lymphocytes that lasts for 2 to 6 months.",
          "E. It is effective against both T cells and B cells."
        ],
        "answer": "E"
      },
      {
        "question_number": "20",
        "question": "A 35-year-old man with a body mass index of 22 underwent kidney transplantation 6 weeks earlier for focal segmental glomerulosclerosis. He has a sense of fullness in his pelvis and increased urinary frequency. On physical examination, the ipsilateral lower extremity is painless but noticeably swollen. Ultrasound of the lower extremities is negative for deep venous thrombosis. An ultrasound of the transplanted kidney shows normal flow and heterogeneous fluid collection adjacent to the bladder. What is the best initial management of this problem?",
        "choices": [
          "A. Percutaneous drainage",
          "B. Percutaneous drainage with sclerosis",
          "C. Reexploration of the surgical site",
          "D. Observation",
          "E. Laparoscopic internal marsupialization"
        ],
        "answer": "A"
      },
      {
        "question_number": "21",
        "question": "Which of the following statements regarding the immune response is true?",
        "choices": [
          "A. The primary immune response is more intense and rapid than the secondary immune response.",
          "B. A cell-mediated immune response consists primarily of T lymphocytes.",
          "C. T lymphocytes are the precursors of plasma cells, which produce antibodies.",
          "D. The immune response has three phases, the first being the establishment of memory.",
          "E. Immunoglobulins (IgG versus IgE versus IgM) are all identical except at the variable region."
        ],
        "answer": "B"
      },
      {
        "question_number": "22",
        "question": "A 32-year-old woman is seen in the emergency department with an acute onset of confusion. Her laboratory work reveals markedly elevated transaminase levels, hyperbilirubi nemia, and coagulopathy. Which of the following is not a potential indication for transplantation in a patient with fulminant hepatic failure?",
        "choices": [
          "A. Progressive jaundice over the past 2 weeks",
          "B. Overdose of acetaminophen",
          "C. Acute infection with hepatitis A virus (HAV)",
          "D. Prothrombin time greater than 100 s",
          "E. Acute fatty liver of pregnancy"
        ],
        "answer": "A"
      },
      {
        "question_number": "23",
        "question": "Mr. Smith is a 58-year-old man with chronic HBV cirrhosis who presents for OLT. His labs on the day of the transplant show absence of HBV DNA, presence of e antigen, and MELD score 29. Regarding his risk of recurrent HBV, which of the following statements in true?",
        "choices": [
          "A. Lamivudine is the preferred prophylaxis in this patient.",
          "B. This patient’s lab results have no bearing on his risk for recurrence.",
          "C. This patient has a higher risk of recurrence than patients with fulminant HBV infection.",
          "D. Hepatitis B immunoglobulin (HBIg) has no role in the posttransplant period.",
          "E. This patient only has an indication for posttransplant prophylaxis."
        ],
        "answer": "C"
      },
      {
        "question_number": "24",
        "question": "In a uremic diabetic patient who undergoes SPK transplantation, which of the following statements regarding the secondary complications of diabetes and pancreatic transplantation is true?",
        "choices": [
          "A. Diabetic retinopathy is irreversible; however, there is generally no further progression after pancreatic transplantation.",
          "B. Recurrence of diabetic nephropathy in renal allografts is inevitable.",
          "C. Diabetic neuropathy is irreversible; however, there is generally no further progression after pancreatic transplantation.",
          "D. Advanced diabetic neuropathy is improved with pancre atic transplantation; however, overall survival rates in this patient population are unchanged.",
          "E. Diabetic gastropathy is reversed by 3 years after transplantation."
        ],
        "answer": "A"
      },
      {
        "question_number": "25",
        "question": "Which of the following statements is true regarding the deceased kidney allocation scheme (KAS)?",
        "choices": [
          "A. Wait time for point accrual in the KAS begins at the time of official referral to a transplant center.",
          "B. Cadaveric renal allografts are allocated nationwide, as opposed to locally, if the donor organ matches all six HLA antigens of a recipient.",
          "C. Previous living kidney donor status assigns the most points within the KAS and therefore the highest priority in order to allocate the next ABO-compatible allograft to that waitlist candidate.",
          "D. Transplant candidates with panelreactive antibodies (PRA) results of 98%–100% are given no preferential treatment in the KAS. Unfortunately, this translates to a very low likelihood of undergoing transplantation.",
          "E. The KAS takes into account details of the recipient only; the donor profile is reviewed by the surgeon on an individual, but not standardized, basis."
        ],
        "answer": "B"
      },
      {
        "question_number": "26",
        "question": "Six months after renal transplantation, a 56-year-old woman is admitted to the hospital with high fever, an elevated serum creatinine level, disseminated vesicular skin lesions, and bilateral pulmonary infiltrates. Which of the following statements is most accurate?",
        "choices": [
          "A. This is most likely due to primary VZV infection.",
          "B. Superinfection with bacterial pneumonia is rare.",
          "C. The gold standard of treatment for disseminated disease includes corticosteroids.",
          "D. The immunosuppressive drug regimen should be main tained given the transplant was performed less than 1 year ago.",
          "E. The initial treatment is varicella-zoster immune globulin."
        ],
        "answer": "A"
      },
      {
        "question_number": "27",
        "question": "Which of the following statements is true regarding the immunosuppressive agent tacrolimus?",
        "choices": [
          "A. It inhibits T cells by inhibiting de novo purine synthesis.",
          "B. It is better to use in posttransplant liver patients who have baseline chronic kidney disease.",
          "C. It is not a maintenance immunosuppressive agent; rather, it is used for induction and refractory acute rejection.",
          "D. It reduces the synthesis of IL-2 and IFN-γ as well as inhibits secretion of IL-1 from macrophages.",
          "E. It is associated with significantly fewer episodes of acute steroid-resistant or refractory rejection."
        ],
        "answer": "E"
      },
      {
        "question_number": "28",
        "question": "Which of the following statements regarding interferons is true?",
        "choices": [
          "A. IFN-γ is produced by macrophages.",
          "B. Interferon production is inhibited by infection.",
          "C. Interferons have a direct antiproliferative effect on TH2 cells.",
          "D. Cytokine production by macrophages is inhibited by interferons.",
          "E. Pegylated interferon-α (PEG–IFN-α) is a highly effective and easily tolerated treatment option for HCV liver disease."
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "Which of the following statements regarding liver ischemia– reperfusion injury is true?",
        "choices": [
          "A. Cold ischemia is more deleterious to sinusoidal endothe lial cells (SECs) than to hepatocytes.",
          "B. Warm ischemia time between 90 and 120 min is typically well tolerated.",
          "C. Activated proteases, like calpain, are responsible for the increased intracellular calcium concentration seen during cold ischemia time.",
          "D. The significant increase in superoxide radical production is seen mostly during cold ischemia time.",
          "E. During warm ischemia time, the supply of ATP decreases, while the demand remains the same."
        ],
        "answer": "A"
      },
      {
        "question_number": "30",
        "question": "Which of the following statements regarding T-cell activation is true?",
        "choices": [
          "A. Antigen recognition is not specific, which allows clonal expansion and differentiation.",
          "B. Antigen expression requires the T cells to be MHC compatible with the antigenpresenting cells.",
          "C. T cells produce IL-1 in response to antigen presentation.",
          "D. Plasma cells are responsible for the synthesis of IL-2.",
          "E. T cells recognize soluble antigens."
        ],
        "answer": "B"
      },
      {
        "question_number": "31",
        "question": "A 26-year-old man is found to be brain-dead after a gunshot wound to the head. His family consents to organ donation. Which of the following is a contraindication to organ donation?",
        "choices": [
          "A. Positive hepatitis B core antibody",
          "B. Active hepatitis C",
          "C. History of basal cell carcinoma 5 years ago",
          "D. Donor liver biopsy with 10% steatosis",
          "E. Creutzfeldt–Jakob disease"
        ],
        "answer": "E"
      },
      {
        "question_number": "32",
        "question": "The incidence of primary nonfunction of a liver allograft following transplantation ranges from 2% to 10%. Immedi ately after the liver transplantation procedure, which of the following is associated with this clinical syndrome?",
        "choices": [
          "A. Metabolic alkalosis",
          "B. Hyperkalemia",
          "C. Hypertensive crisis",
          "D. Low-output heart failure",
          "E. Excessive bile output (if a T-tube biliary drainage catheter is in place)"
        ],
        "answer": "B"
      },
      {
        "question_number": "33",
        "question": "Which of the following statements is true?",
        "choices": [
          "A. Infection with CMV following kidney transplantation is the strongest predictor of poor long-term survival.",
          "B. The incidence of symptomatic CMV infection is declining secondary to the use of screening tests.",
          "C. Patients at highest risk for the development of CMV infection are those who test seropositive for CMV IgG.",
          "D. CMV infection is more likely than infection with polyomavirus (BK) to cause chronic allograft nephropathy.",
          "E. CMV infection can be indistinguishable from acute EBV infection."
        ],
        "answer": "B"
      },
      {
        "question_number": "34",
        "question": "Which of the following would exclude a patient with HCC from becoming a transplant candidate?",
        "choices": [
          "A. A single 1-cm lesion in the liver with microvascular invasion",
          "B. Two lesions, each less than 2 cm",
          "C. A solitary 1-cm HCC lesion in the lung",
          "D. A single 4.8-cm HCC lesion in segment VIII",
          "E. Portal vein thrombus"
        ],
        "answer": "C"
      }
    ],
    "Chapter 7: Perioperative Care and Anesthesia": [
      {
        "question_number": "1",
        "question": "Maintaining perioperative serum glucose levels between 80 and 110 mg/dL in diabetic patients undergoing cardiac surgery may:",
        "choices": [
          "A. Have no effect on postoperative complications",
          "B. Increase the incidence of deep sternal wound infections",
          "C. Increase the incidence of hypoglycemia",
          "D. Promote osmotic diuresis",
          "E. Decrease in-hospital mortality"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "In addition to determining blood glucose levels, the periopera tive management of a patient with diet-controlled diabetes mellitus should include which of the following considerations?",
        "choices": [
          "A. Determination of glycosylated hemoglobin (HbA1c) level before surgery",
          "B. Subcutaneous administration of regular insulin for glucose levels above 140 mg%",
          "C. Metformin initiated 3 days prior to surgery",
          "D. Intravenous (IV) insulin therapy 1 h prior to surgery",
          "E. Oral liquid carbohydrate initiated 3 h prior to surgery"
        ],
        "answer": "A"
      },
      {
        "question_number": "3",
        "question": "When evaluating a patient with known or suspected adrenal insufficiency, which of the following statements is false?",
        "choices": [
          "A. Glucocorticoid therapy should be adjusted in response to the anticipated surgical stress.",
          "B. Signs and symptoms of acute adrenal insufficiency may mimic those of septic shock.",
          "C. Hypernatremia, hypokalemia, and hypoglycemia commonly occur.",
          "D. Sudden development of hypotension requires hydrocorti sone 50 to 100 mg IV.",
          "E. Dexamethasone does not interfere with the corticotropin stimulation test."
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "A patient with a history of glucocorticoid-dependent rheuma toid arthritis is scheduled for colon resection. Which of the following statements is false?",
        "choices": [
          "A. Intraoperative hypoperfusion should be treated with hydrocortisone 100 mg IV.",
          "B. The patient is at an increased risk of infection.",
          "C. The patient may benefit from concomitantly administered epidural analgesia.",
          "D. An ACTH stimulation test may be indicated prior to elective reversal of the colostomy.",
          "E. Etomidate may be safely administered for anesthesia induction and maintenance."
        ],
        "answer": "E"
      },
      {
        "question_number": "5",
        "question": "Which of the following statements concerning perioperative management of patients with pheochromocytoma is false?",
        "choices": [
          "A. α-Adrenergic blockade with phenoxybenzamine may require 2 to 4 weeks of therapy.",
          "B. β-blockade is useful as a primary antihypertensive agent.",
          "C. Clinical criteria confirm adequate α-adrenergic blockade.",
          "D. Intraoperative hypotension following resection of the tumor is best treated with vasopressin and/or methylene blue.",
          "E. Sevoflurane is the preferred anesthetic agent vs. desflurane."
        ],
        "answer": "B"
      },
      {
        "question_number": "6",
        "question": "A 33-year-old woman is scheduled for elective cholecystec tomy. Preoperative evaluation shows the presence of moderate hypothyroidism. Select the next most appropriate action:",
        "choices": [
          "A. Proceed with surgery with the knowledge that minor perioperative complications could develop.",
          "B. Postpone surgery until a euthyroid state is achieved.",
          "C. Proceed with surgery while beginning treatment with levothyroxine.",
          "D. Proceed with surgery while beginning treatment with thioamides.",
          "E. Proceed with surgery if severe clinical symptoms are not present."
        ],
        "answer": "B"
      },
      {
        "question_number": "7",
        "question": "Which of the following drugs is not recommended for the perioperative management of thyroid storm?",
        "choices": [
          "A. Propranolol",
          "B. Propylthiouracil",
          "C. Iodine solution",
          "D. Aspirin",
          "E. Acetaminophen"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Which of the following statements is true regarding the use of epidural anesthesia/analgesia (EA) in patients with severe chronic obstructive pulmonary disease (COPD) who are undergoing abdominal surgery when compared with the use of perioperative opiates?",
        "choices": [
          "A. The use of EA is associated with a decrease in postopera tive pneumonia.",
          "B. The use of EA facilitates postoperative ambulation and feeding.",
          "C. The use of EA is associated with a decrease in ventilator dependency.",
          "D. The use of EA is associated with unplanned postoperative tracheal intubation.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "9",
        "question": "Which of the following regarding pulmonary function tests (PFTs) is true?",
        "choices": [
          "A. Functional residual capacity (FRC) is the lung volume after forced expiration.",
          "B. FRC is not altered by atelectasis.",
          "C. Forced vital capacity (FVC) is the lung volume after maximal expiration and inhalation.",
          "D. Minute ventilation is FVC × respiratory rate.",
          "E. Positive end-expiratory pressure (PEEP) does not improve FRC."
        ],
        "answer": "C"
      },
      {
        "question_number": "10",
        "question": "Regarding preoperative PFTs, which of the following statements is/are false?",
        "choices": [
          "A. PFTs help predict postoperative pulmonary complications in patients undergoing abdominal operations.",
          "B. PFTs conducted before and after bronchodilator therapy are useful in determining optimal management.",
          "C. The history and physical examination are more useful than PFTs in predicting postoperative pulmonary complications.",
          "D. Patients with an FRC less than 50% of FVC should undergo ventilation-perfusion testing before pneumonectomy.",
          "E. All of the above."
        ],
        "answer": "A"
      },
      {
        "question_number": "11",
        "question": "A 25-year-old asthmatic patient is scheduled for elective inguinal hernia repair. In the holding area, he exhibits bilateral wheezing on auscultation. Which of the following would be the best initial approach to perioperative manage ment for this patient’s surgery?",
        "choices": [
          "A. Perform a field block with local anesthesia and sedate with IV ketamine and propofol.",
          "B. Administer albuterol nebulizer treatment preoperatively and proceed with general anesthesia sevoflurane via a laryngeal mask airway (LMA).",
          "C. Postpone surgery for 4 to 6 weeks.",
          "D. Perform surgery with spinal anesthesia.",
          "E. Administer hydrocortisone 100 mg IV and proceed with general anesthesia with desflurane administered via an endotracheal tube."
        ],
        "answer": "C"
      },
      {
        "question_number": "12",
        "question": "A 85-year-old with severe COPD is scheduled for elective cholecystectomy. The risk for postoperative pulmonary complications can be minimized in this patient by all of the following except:",
        "choices": [
          "A. Cessation of smoking for at least 8 weeks",
          "B. Prophylactic antibiotics for patients with productive yellowish sputum",
          "C. Perioperative incentive spirometry",
          "D. Laparoscopic technique",
          "E. Inspiratory-to-expiratory ratio of 1:1 during mechanical ventilation"
        ],
        "answer": "E"
      },
      {
        "question_number": "13",
        "question": "A 45-year-old male 5′10″ in height with a body mass index (BMI) 44 kg/m2 and a history of continuous positive airway pressure (CPAP)-dependent obstructive sleep apnea is likely to present with each of the following preoperative test abnormalities except:",
        "choices": [
          "A. ECG: P Pulmonale",
          "B. PFTs: Vital capacity, 2.5 cm3",
          "C. CBC: Hemoglobin, 16.5 gm%",
          "D. Electrolytes: HCO3−, 30 mEq/L",
          "E. Chest x-ray (CXR): Flattened diaphragms"
        ],
        "answer": "E"
      },
      {
        "question_number": "14",
        "question": "A 67-year-old obese patient with a history of diabetes mellitus and hypertension undergoes revision of a right total hip arthroplasty. Which of the following reasons would place this patient at an increased risk for developing postoperative deep-vein thrombosis (DVT)?",
        "choices": [
          "A. Venous stasis",
          "B. Polycythemia",
          "C. Decreased ambulation",
          "D. Length of surgery",
          "E. Associated ischemic heart disease"
        ],
        "answer": "E"
      },
      {
        "question_number": "15",
        "question": "A morbidly obese patient with a history of obstructive sleep apnea presents for coronary artery bypass graft surgery. Which of the following statements is true regarding general anesthesia and airway management in this patient?",
        "choices": [
          "A. Large neck circumference makes intubation difficult but does not compromise mask ventilation.",
          "B. The diagnosis of obstructive sleep apnea should not alter management.",
          "C. Hypoxemia following induction of anesthesia and during intubation is likely due to diminished FRC.",
          "D. Awake intubation is not contraindicated.",
          "E. LMA management is preferred because of decreased airway trauma."
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "Atrial fibrillation with a heart rate of 110 beats/min develops in a 65-year-old male 3 days following a coronary arterial bypass graft operation. Blood pressure is 100/74 mmHg, and laboratory test values are normal. Which of the following is true?",
        "choices": [
          "A. The patient is not at an increased risk for stroke.",
          "B. The duration and cost of the patient’s hospital stay will be increased.",
          "C. Cardioversion is indicated.",
          "D. Initiate anticoagulant therapy with heparin within 6 h.",
          "E. All of the above."
        ],
        "answer": "B"
      },
      {
        "question_number": "17",
        "question": "A 65-year-old man with a long-standing history of hyperten sion and a smoking history of 25 pack/year is scheduled for elective laparoscopic hernia repair. His blood pressure is 150/90 mmHg. The ECG shows nonspecific ST-segment changes. Appropriate interventions would include which of the following?",
        "choices": [
          "A. Canceling the procedure",
          "B. Obtaining a more detailed history regarding the level of exercise and daily activity",
          "C. Requesting a cardiac consultation",
          "D. Perioperative administration of a β-blocker and changing the operation to open hernia repair with local anesthesia",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "18",
        "question": "A patient is scheduled for a colon resection for diverticulitis. His history is significant for asthma, hypertension, and insulin-dependent diabetes. He had two drug-eluting coronary stents placed 12 months ago. He is currently symptom free and exercises three times per week to six metabolic equiva lents (METs). Preoperative testing should include which of the following?",
        "choices": [
          "A. Transesophageal echocardiogram",
          "B. Troponin C level",
          "C. Adenosine-stress test",
          "D. Coronary angiography",
          "E. None of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "19",
        "question": "In patients with intermediate predictors of cardiac risk who are scheduled for high-risk surgical procedures, which of the following interventions can reduce perioperative mortality?",
        "choices": [
          "A. Intraoperative ST-segment analysis",
          "B. Preoperative administration of β-blockade therapy",
          "C. Intraoperative transesophageal echocardiography monitoring",
          "D. Prophylactic administration of IV nitroglycerin",
          "E. Regional anesthesia in conjunction with general anesthesia"
        ],
        "answer": "B"
      },
      {
        "question_number": "20",
        "question": "A 65-year-old male undergoes repair of an infrarenal abdominal aortic aneurysm. Evidence-based strategies for intraoperative renal protection prior to aortic crossclamp placement include administration of which of the following?",
        "choices": [
          "A. Fenoldopam",
          "B. Isotonic saline",
          "C. Mannitol",
          "D. Furosemide",
          "E. Low-dose dopamine"
        ],
        "answer": "B"
      },
      {
        "question_number": "21",
        "question": "Regarding urinary retention after ambulatory surgery, which of the following statements is false?",
        "choices": [
          "A. It is most frequently associated with herniorrhaphy and anorectal procedures.",
          "B. It is greater with spinal anesthesia than general anesthesia.",
          "C. It can frequently be asymptomatic.",
          "D. Ambulatory surgery patients may be discharged prior to voiding.",
          "E. It can be caused by excessive administration of IV fluids."
        ],
        "answer": "B"
      },
      {
        "question_number": "22",
        "question": "Initial treatment of a postdural puncture headache (PDPH) after spinal anesthesia for a total knee arthroplasty includes all of the following except:",
        "choices": [
          "A. Epidural blood patch",
          "B. Increasing oral fluid intake",
          "C. Bed rest",
          "D. Oral analgesics",
          "E. IV caffeine"
        ],
        "answer": "A"
      },
      {
        "question_number": "23",
        "question": "Which statement about postoperative nausea and vomiting (PONV) after ambulatory surgery is false?",
        "choices": [
          "A. It is associated with opiate use.",
          "B. It occurs less frequently following anesthetic induction or maintenance with propofol.",
          "C. Antiemetic therapy should be administered to all patients before ambulatory surgery.",
          "D. It is increased in adults who are not required to ingest oral fluids before discharge.",
          "E. Wound hematoma is not a risk factor for PONV."
        ],
        "answer": "C"
      },
      {
        "question_number": "24",
        "question": "Patients with liver dysfunction may be at an increased risk for surgery. Which of the following statements about this is false?",
        "choices": [
          "A. Laparoscopic surgery can be safely performed in patients with acute hepatitis A.",
          "B. Sevoflurane reduces hepatic arterial blood flow less than halothane.",
          "C. Hypercapnia increases portal blood flow.",
          "D. Fentanyl elimination is not appreciably altered in patients with cirrhosis.",
          "E. Patients with Child class B cirrhosis undergoing cardiac surgery have a high mortality rate."
        ],
        "answer": "A"
      },
      {
        "question_number": "25",
        "question": "A 66-year-old male undergoes laparotomy for perforated diverticulosis. In the intensive care unit (ICU), the patient remains on mechanical ventilation with FiO2 = 0.5 and intravenous (IV) norepinephrine 5 μg/min. The arterial blood gas (ABG) analysis reveals the following: pH, 7.29; PaCO2, 38 mmHg; PaO2, 72 mmHg; HCO3–, 18 mEq/L. The acid–base disturbance is best described as:",
        "choices": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis and respiratory alkalosis",
          "C. Respiratory acidosis and metabolic alkalosis",
          "D. Metabolic acidosis and respiratory acidosis",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "26",
        "question": "A 33-year-old, 70-kg female undergoes a 4-h colon resection under general anesthesia. Intraoperative blood loss is 300 mL, and the patient received 3.5 L of 0.9% saline. In the postanesthesia care unit (PACU), the patient is breathing 2 L oxygen by nasal cannula and receiving IV morphine for analgesia. Vital signs are stable. Laboratory data reveal the following: Na+, 141 mEq/L; Cl–, 115 mEq/L; HCO3–, 18 mEq/L; K+, 3.9 mEq/L; ABGs: pH, 7.34; PaCO2, 33 mmHg; PaO2, 92 mmHg. The most likely etiology of the patient’s laboratory findings is:",
        "choices": [
          "A. Metabolic acidosis secondary to hyperlactatemia",
          "B. Respiratory alkalosis secondary to pain",
          "C. Respiratory acidosis secondary to residual anesthesia",
          "D. Metabolic acidosis secondary to hyperchloremia",
          "E. Respiratory acidosis secondary to morphine"
        ],
        "answer": "D"
      },
      {
        "question_number": "27",
        "question": "An 80-year-old, fully oriented female requires urgent surgery for a small bowel obstruction. She has a preexisting do not resuscitate (DNR) order based on quality-of-life issues. Prior to surgery, what is the best means to address the DNR order?",
        "choices": [
          "A. Recommend to the patient to discontinue the order and reinstate after surgery.",
          "B. Automatically rescind as surgery takes precedence over the order.",
          "C. Automatically maintain the order for surgery.",
          "D. Discuss with patient’s daughter and abide by the daughter’s wishes.",
          "E. Cancel the surgery, if the patient desires to maintain the order for the procedure."
        ],
        "answer": "A"
      },
      {
        "question_number": "28",
        "question": "A 45-year-old male presents for emergency splenectomy following a motor vehicle collision. The patient states that he is a Jehovah’s Witness (JW) and would rather die than take a blood transfusion. The patient’s starting hemoglobin is 8.5 gm%. Which of the following is the most appropriate management in the case of this patient?",
        "choices": [
          "A. Request a consent order to transfuse, if necessary.",
          "B. Administer fresh frozen plasma as a red cell substitute.",
          "C. Honor the patient’s wishes and do not transfuse blood, even if massive hemorrhage ensues.",
          "D. Obtain consent from his spouse to transfuse once anesthesia has been initiated.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "A 78-year-old male with a history of hypertension develops acute delirium while recovering in the ICU 2 days following a pancreatectomy for pancreatic cancer. Vitals: BP, 150/100 mmHg; HR, 110 bpm; RR, 20 beats per min; T, 36ºC; SaO2, 99%. Neurologic examination: no focal defects. Lab data: Na+, 130 mEq/L; Glucose, 140 mg%. ABGs: pH, 7.46; PaCO2, 32 mmHg; PaO2, 98 mmHg. Medications: morphine, scopolamine patch, metoprolol, and furosemide. Which of the following is the next best step in this patient’s management?",
        "choices": [
          "A. Administer lorazepam.",
          "B. Continue scopolamine.",
          "C. Initiate free water restriction.",
          "D. Continue morphine.",
          "E. Initiate dexmedetomidine."
        ],
        "answer": "E"
      },
      {
        "question_number": "30",
        "question": "Which of the following statements in regard to delaying elective noncardiac surgery is true?",
        "choices": [
          "A. Elective noncardiac surgery should be delayed for at least 1 week after coronary artery balloon angioplasty without stent placement.",
          "B. Elective noncardiac surgery should be delayed at least 3 months after placement of a bare-metal stent for MI.",
          "C. Risk of stent thrombosis or ischemia after percutaneous coronary intervention (PCI) for MI is minimal, and surgery should not be postponed.",
          "D. Elective noncardiac surgery should ideally be postponed 1 year after drug-eluting stent placement.",
          "E. All of the above."
        ],
        "answer": "D"
      },
      {
        "question_number": "31",
        "question": "Which of the following statements is false regarding urinary retention after ambulatory surgery?",
        "choices": [
          "A. It is most frequently associated with herniorrhaphy and anorectal procedures.",
          "B. It is greater with spinal anesthesia than general anesthesia.",
          "C. It can frequently be asymptomatic.",
          "D. Ambulatory surgery patients may be discharged prior to voiding.",
          "E. It can be caused by excessive administration of IV fluids."
        ],
        "answer": "B"
      },
      {
        "question_number": "32",
        "question": "Initial treatment of a postdural puncture headache (PDPH) after spinal anesthesia for a total knee arthroplasty includes all of the following except:",
        "choices": [
          "A. Epidural blood patch",
          "B. Increasing oral fluid intake",
          "C. Bed rest",
          "D. Oral analgesics",
          "E. IV caffeine"
        ],
        "answer": "A"
      },
      {
        "question_number": "33",
        "question": "Which statement about postoperative nausea and vomiting (PONV) after ambulatory surgery is false?",
        "choices": [
          "A. It is associated with opiate use.",
          "B. It occurs less frequently following anesthetic induction or maintenance with propofol.",
          "C. Antiemetic therapy should be administered to all patients before ambulatory surgery.",
          "D. It is increased in adults who are not required to ingest oral fluids before discharge.",
          "E. Wound hematoma is not a risk factor for PONV."
        ],
        "answer": "C"
      },
      {
        "question_number": "34",
        "question": "Patients with liver dysfunction may be at an increased risk for surgery. Which of the following statements about this is false?",
        "choices": [
          "A. Laparoscopic surgery can be safely performed in patients with acute hepatitis A.",
          "B. Sevoflurane reduces hepatic arterial blood flow less than halothane.",
          "C. Hypercapnia increases portal blood flow.",
          "D. Fentanyl elimination is not appreciably altered in patients with cirrhosis.",
          "E. Patients with Child class B cirrhosis undergoing cardiac surgery have a high mortality rate."
        ],
        "answer": "A"
      },
      {
        "question_number": "35",
        "question": "A 66-year-old male undergoes laparotomy for perforated diverticulosis. In the intensive care unit (ICU), the patient remains on mechanical ventilation with FiO2 = 0.5 and intravenous (IV) norepinephrine 5 μg/min. The arterial blood gas (ABG) analysis reveals the following: pH, 7.29; PaCO2, 38 mmHg; PaO2, 72 mmHg; HCO3–, 18 mEq/L. The acid–base disturbance is best described as:",
        "choices": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis and respiratory alkalosis",
          "C. Respiratory acidosis and metabolic alkalosis",
          "D. Metabolic acidosis and respiratory acidosis",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "36",
        "question": "A 33-year-old, 70-kg female undergoes a 4-h colon resection under general anesthesia. Intraoperative blood loss is 300 mL, and the patient received 3.5 L of 0.9% saline. In the postanesthesia care unit (PACU), the patient is breathing 2 L oxygen by nasal cannula and receiving IV morphine for analgesia. Vital signs are stable. Laboratory data reveal the following: Na+, 141 mEq/L; Cl–, 115 mEq/L; HCO3–, 18 mEq/L; K+, 3.9 mEq/L; ABGs: pH, 7.34; PaCO2, 33 mmHg; PaO2, 92 mmHg. The most likely etiology of the patient’s laboratory findings is:",
        "choices": [
          "A. Metabolic acidosis secondary to hyperlactatemia",
          "B. Respiratory alkalosis secondary to pain",
          "C. Respiratory acidosis secondary to residual anesthesia",
          "D. Metabolic acidosis secondary to hyperchloremia",
          "E. Respiratory acidosis secondary to morphine"
        ],
        "answer": "D"
      },
      {
        "question_number": "37",
        "question": "An 80-year-old, fully oriented female requires urgent surgery for a small bowel obstruction. She has a preexisting do not resuscitate (DNR) order based on quality-of-life issues. Prior to surgery, what is the best means to address the DNR order?",
        "choices": [
          "A. Recommend to the patient to discontinue the order and reinstate after surgery.",
          "B. Automatically rescind as surgery takes precedence over the order.",
          "C. Automatically maintain the order for surgery.",
          "D. Discuss with patient’s daughter and abide by the daughter’s wishes.",
          "E. Cancel the surgery, if the patient desires to maintain the order for the procedure."
        ],
        "answer": "A"
      },
      {
        "question_number": "38",
        "question": "A 45-year-old male presents for emergency splenectomy following a motor vehicle collision. The patient states that he is a Jehovah’s Witness (JW) and would rather die than take a blood transfusion. The patient’s starting hemoglobin is 8.5 gm%. Which of the following is the most appropriate management in the case of this patient?",
        "choices": [
          "A. Request a consent order to transfuse, if necessary.",
          "B. Administer fresh frozen plasma as a red cell substitute.",
          "C. Honor the patient’s wishes and do not transfuse blood, even if massive hemorrhage ensues.",
          "D. Obtain consent from his spouse to transfuse once anesthesia has been initiated.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "39",
        "question": "A 78-year-old male with a history of hypertension develops acute delirium while recovering in the ICU 2 days following a pancreatectomy for pancreatic cancer. Vitals: BP, 150/100 mmHg; HR, 110 bpm; RR, 20 beats per min; T, 36ºC; SaO2, 99%. Neurologic examination: no focal defects. Lab data: Na+, 130 mEq/L; Glucose, 140 mg%. ABGs: pH, 7.46; PaCO2, 32 mmHg; PaO2, 98 mmHg. Medications: morphine, scopolamine patch, metoprolol, and furosemide. Which of the following is the next best step in this patient’s management?",
        "choices": [
          "A. Administer lorazepam.",
          "B. Continue scopolamine.",
          "C. Initiate free water restriction.",
          "D. Continue morphine.",
          "E. Initiate dexmedetomidine."
        ],
        "answer": "E"
      },
      {
        "question_number": "40",
        "question": "Which of the following statements in regard to delaying elective noncardiac surgery is true?",
        "choices": [
          "A. Elective noncardiac surgery should be delayed for at least 1 week after coronary artery balloon angioplasty without stent placement.",
          "B. Elective noncardiac surgery should be delayed at least 3 months after placement of a bare-metal stent for MI.",
          "C. Risk of stent thrombosis or ischemia after percutaneous coronary intervention (PCI) for MI is minimal, and surgery should not be postponed.",
          "D. Elective noncardiac surgery should ideally be postponed 1 year after drug-eluting stent placement.",
          "E. All of the above."
        ],
        "answer": "D"
      },
      {
        "question_number": "41",
        "question": "Which of the following statements is false regarding urinary retention after ambulatory surgery?",
        "choices": [
          "A. It is most frequently associated with herniorrhaphy and anorectal procedures.",
          "B. It is greater with spinal anesthesia than general anesthesia.",
          "C. It can frequently be asymptomatic.",
          "D. Ambulatory surgery patients may be discharged prior to voiding.",
          "E. It can be caused by excessive administration of IV fluids."
        ],
        "answer": "B"
      },
      {
        "question_number": "42",
        "question": "Initial treatment of a postdural puncture headache (PDPH) after spinal anesthesia for a total knee arthroplasty includes all of the following except:",
        "choices": [
          "A. Epidural blood patch",
          "B. Increasing oral fluid intake",
          "C. Bed rest",
          "D. Oral analgesics",
          "E. IV caffeine"
        ],
        "answer": "A"
      },
      {
        "question_number": "43",
        "question": "Which statement about postoperative nausea and vomiting (PONV) after ambulatory surgery is false?",
        "choices": [
          "A. It is associated with opiate use.",
          "B. It occurs less frequently following anesthetic induction or maintenance with propofol.",
          "C. Antiemetic therapy should be administered to all patients before ambulatory surgery.",
          "D. It is increased in adults who are not required to ingest oral fluids before discharge.",
          "E. Wound hematoma is not a risk factor for PONV."
        ],
        "answer": "C"
      },
      {
        "question_number": "44",
        "question": "Patients with liver dysfunction may be at an increased risk for surgery. Which of the following statements about this is false?",
        "choices": [
          "A. Laparoscopic surgery can be safely performed in patients with acute hepatitis A.",
          "B. Sevoflurane reduces hepatic arterial blood flow less than halothane.",
          "C. Hypercapnia increases portal blood flow.",
          "D. Fentanyl elimination is not appreciably altered in patients with cirrhosis.",
          "E. Patients with Child class B cirrhosis undergoing cardiac surgery have a high mortality rate."
        ],
        "answer": "A"
      },
      {
        "question_number": "45",
        "question": "A 66-year-old male undergoes laparotomy for perforated diverticulosis. In the intensive care unit (ICU), the patient remains on mechanical ventilation with FiO2 = 0.5 and intravenous (IV) norepinephrine 5 μg/min. The arterial blood gas (ABG) analysis reveals the following: pH, 7.29; PaCO2, 38 mmHg; PaO2, 72 mmHg; HCO3–, 18 mEq/L. The acid–base disturbance is best described as:",
        "choices": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis and respiratory alkalosis",
          "C. Respiratory acidosis and metabolic alkalosis",
          "D. Metabolic acidosis and respiratory acidosis",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "46",
        "question": "A 33-year-old, 70-kg female undergoes a 4-h colon resection under general anesthesia. Intraoperative blood loss is 300 mL, and the patient received 3.5 L of 0.9% saline. In the postanesthesia care unit (PACU), the patient is breathing 2 L oxygen by nasal cannula and receiving IV morphine for analgesia. Vital signs are stable. Laboratory data reveal the following: Na+, 141 mEq/L; Cl–, 115 mEq/L; HCO3–, 18 mEq/L; K+, 3.9 mEq/L; ABGs: pH, 7.34; PaCO2, 33 mmHg; PaO2, 92 mmHg. The most likely etiology of the patient’s laboratory findings is:",
        "choices": [
          "A. Metabolic acidosis secondary to hyperlactatemia",
          "B. Respiratory alkalosis secondary to pain",
          "C. Respiratory acidosis secondary to residual anesthesia",
          "D. Metabolic acidosis secondary to hyperchloremia",
          "E. Respiratory acidosis secondary to morphine"
        ],
        "answer": "D"
      },
      {
        "question_number": "47",
        "question": "An 80-year-old, fully oriented female requires urgent surgery for a small bowel obstruction. She has a preexisting do not resuscitate (DNR) order based on quality-of-life issues. Prior to surgery, what is the best means to address the DNR order?",
        "choices": [
          "A. Recommend to the patient to discontinue the order and reinstate after surgery.",
          "B. Automatically rescind as surgery takes precedence over the order.",
          "C. Automatically maintain the order for surgery.",
          "D. Discuss with patient’s daughter and abide by the daughter’s wishes.",
          "E. Cancel the surgery, if the patient desires to maintain the order for the procedure."
        ],
        "answer": "A"
      },
      {
        "question_number": "48",
        "question": "A 45-year-old male presents for emergency splenectomy following a motor vehicle collision. The patient states that he is a Jehovah’s Witness (JW) and would rather die than take a blood transfusion. The patient’s starting hemoglobin is 8.5 gm%. Which of the following is the most appropriate management in the case of this patient?",
        "choices": [
          "A. Request a consent order to transfuse, if necessary.",
          "B. Administer fresh frozen plasma as a red cell substitute.",
          "C. Honor the patient’s wishes and do not transfuse blood, even if massive hemorrhage ensues.",
          "D. Obtain consent from his spouse to transfuse once anesthesia has been initiated.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "49",
        "question": "A 78-year-old male with a history of hypertension develops acute delirium while recovering in the ICU 2 days following a pancreatectomy for pancreatic cancer. Vitals: BP, 150/100 mmHg; HR, 110 bpm; RR, 20 beats per min; T, 36ºC; SaO2, 99%. Neurologic examination: no focal defects. Lab data: Na+, 130 mEq/L; Glucose, 140 mg%. ABGs: pH, 7.46; PaCO2, 32 mmHg; PaO2, 98 mmHg. Medications: morphine, scopolamine patch, metoprolol, and furosemide. Which of the following is the next best step in this patient’s management?",
        "choices": [
          "A. Administer lorazepam.",
          "B. Continue scopolamine.",
          "C. Initiate free water restriction.",
          "D. Continue morphine.",
          "E. Initiate dexmedetomidine."
        ],
        "answer": "E"
      },
      {
        "question_number": "50",
        "question": "Which of the following statements in regard to delaying elective noncardiac surgery is true?",
        "choices": [
          "A. Elective noncardiac surgery should be delayed for at least 1 week after coronary artery balloon angioplasty without stent placement.",
          "B. Elective noncardiac surgery should be delayed at least 3 months after placement of a bare-metal stent for MI.",
          "C. Risk of stent thrombosis or ischemia after percutaneous coronary intervention (PCI) for MI is minimal, and surgery should not be postponed.",
          "D. Elective noncardiac surgery should ideally be postponed 1 year after drug-eluting stent placement.",
          "E. All of the above."
        ],
        "answer": "D"
      },
      {
        "question_number": "51",
        "question": "Which of the following statements is false regarding urinary retention after ambulatory surgery?",
        "choices": [
          "A. It is most frequently associated with herniorrhaphy and anorectal procedures.",
          "B. It is greater with spinal anesthesia than general anesthesia.",
          "C. It can frequently be asymptomatic.",
          "D. Ambulatory surgery patients may be discharged prior to voiding.",
          "E. It can be caused by excessive administration of IV fluids."
        ],
        "answer": "B"
      },
      {
        "question_number": "52",
        "question": "Initial treatment of a postdural puncture headache (PDPH) after spinal anesthesia for a total knee arthroplasty includes all of the following except:",
        "choices": [
          "A. Epidural blood patch",
          "B. Increasing oral fluid intake",
          "C. Bed rest",
          "D. Oral analgesics",
          "E. IV caffeine"
        ],
        "answer": "A"
      },
      {
        "question_number": "53",
        "question": "Which statement about postoperative nausea and vomiting (PONV) after ambulatory surgery is false?",
        "choices": [
          "A. It is associated with opiate use.",
          "B. It occurs less frequently following anesthetic induction or maintenance with propofol.",
          "C. Antiemetic therapy should be administered to all patients before ambulatory surgery.",
          "D. It is increased in adults who are not required to ingest oral fluids before discharge.",
          "E. Wound hematoma is not a risk factor for PONV."
        ],
        "answer": "C"
      },
      {
        "question_number": "54",
        "question": "Patients with liver dysfunction may be at an increased risk for surgery. Which of the following statements about this is false?",
        "choices": [
          "A. Laparoscopic surgery can be safely performed in patients with acute hepatitis A.",
          "B. Sevoflurane reduces hepatic arterial blood flow less than halothane.",
          "C. Hypercapnia increases portal blood flow.",
          "D. Fentanyl elimination is not appreciably altered in patients with cirrhosis.",
          "E. Patients with Child class B cirrhosis undergoing cardiac surgery have a high mortality rate."
        ],
        "answer": "A"
      },
      {
        "question_number": "55",
        "question": "A 66-year-old male undergoes laparotomy for perforated diverticulosis. In the intensive care unit (ICU), the patient remains on mechanical ventilation with FiO2 = 0.5 and intravenous (IV) norepinephrine 5 μg/min. The arterial blood gas (ABG) analysis reveals the following: pH, 7.29; PaCO2, 38 mmHg; PaO2, 72 mmHg; HCO3–, 18 mEq/L. The acid–base disturbance is best described as:",
        "choices": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis and respiratory alkalosis",
          "C. Respiratory acidosis and metabolic alkalosis",
          "D. Metabolic acidosis and respiratory acidosis",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "56",
        "question": "A 33-year-old, 70-kg female undergoes a 4-h colon resection under general anesthesia. Intraoperative blood loss is 300 mL, and the patient received 3.5 L of 0.9% saline. In the postanesthesia care unit (PACU), the patient is breathing 2 L oxygen by nasal cannula and receiving IV morphine for analgesia. Vital signs are stable. Laboratory data reveal the following: Na+, 141 mEq/L; Cl–, 115 mEq/L; HCO3–, 18 mEq/L; K+, 3.9 mEq/L; ABGs: pH, 7.34; PaCO2, 33 mmHg; PaO2, 92 mmHg. The most likely etiology of the patient’s laboratory findings is:",
        "choices": [
          "A. Metabolic acidosis secondary to hyperlactatemia",
          "B. Respiratory alkalosis secondary to pain",
          "C. Respiratory acidosis secondary to residual anesthesia",
          "D. Metabolic acidosis secondary to hyperchloremia",
          "E. Respiratory acidosis secondary to morphine"
        ],
        "answer": "D"
      },
      {
        "question_number": "57",
        "question": "An 80-year-old, fully oriented female requires urgent surgery for a small bowel obstruction. She has a preexisting do not resuscitate (DNR) order based on quality-of-life issues. Prior to surgery, what is the best means to address the DNR order?",
        "choices": [
          "A. Recommend to the patient to discontinue the order and reinstate after surgery.",
          "B. Automatically rescind as surgery takes precedence over the order.",
          "C. Automatically maintain the order for surgery.",
          "D. Discuss with patient’s daughter and abide by the daughter’s wishes.",
          "E. Cancel the surgery, if the patient desires to maintain the order for the procedure."
        ],
        "answer": "A"
      },
      {
        "question_number": "58",
        "question": "A 45-year-old male presents for emergency splenectomy following a motor vehicle collision. The patient states that he is a Jehovah’s Witness (JW) and would rather die than take a blood transfusion. The patient’s starting hemoglobin is 8.5 gm%. Which of the following is the most appropriate management in the case of this patient?",
        "choices": [
          "A. Request a consent order to transfuse, if necessary.",
          "B. Administer fresh frozen plasma as a red cell substitute.",
          "C. Honor the patient’s wishes and do not transfuse blood, even if massive hemorrhage ensues.",
          "D. Obtain consent from his spouse to transfuse once anesthesia has been initiated.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "59",
        "question": "A 78-year-old male with a history of hypertension develops acute delirium while recovering in the ICU 2 days following a pancreatectomy for pancreatic cancer. Vitals: BP, 150/100 mmHg; HR, 110 bpm; RR, 20 beats per min; T, 36ºC; SaO2, 99%. Neurologic examination: no focal defects. Lab data: Na+, 130 mEq/L; Glucose, 140 mg%. ABGs: pH, 7.46; PaCO2, 32 mmHg; PaO2, 98 mmHg. Medications: morphine, scopolamine patch, metoprolol, and furosemide. Which of the following is the next best step in this patient’s management?",
        "choices": [
          "A. Administer lorazepam.",
          "B. Continue scopolamine.",
          "C. Initiate free water restriction.",
          "D. Continue morphine.",
          "E. Initiate dexmedetomidine."
        ],
        "answer": "E"
      },
      {
        "question_number": "60",
        "question": "Which of the following statements in regard to delaying elective noncardiac surgery is true?",
        "choices": [
          "A. Elective noncardiac surgery should be delayed for at least 1 week after coronary artery balloon angioplasty without stent placement.",
          "B. Elective noncardiac surgery should be delayed at least 3 months after placement of a bare-metal stent for MI.",
          "C. Risk of stent thrombosis or ischemia after percutaneous coronary intervention (PCI) for MI is minimal, and surgery should not be postponed.",
          "D. Elective noncardiac surgery should ideally be postponed 1 year after drug-eluting stent placement.",
          "E. All of the above."
        ],
        "answer": "D"
      },
      {
        "question_number": "61",
        "question": "Which of the following statements is false regarding urinary retention after ambulatory surgery?",
        "choices": [
          "A. It is most frequently associated with herniorrhaphy and anorectal procedures.",
          "B. It is greater with spinal anesthesia than general anesthesia.",
          "C. It can frequently be asymptomatic.",
          "D. Ambulatory surgery patients may be discharged prior to voiding.",
          "E. It can be caused by excessive administration of IV fluids."
        ],
        "answer": "B"
      },
      {
        "question_number": "62",
        "question": "Initial treatment of a postdural puncture headache (PDPH) after spinal anesthesia for a total knee arthroplasty includes all of the following except:",
        "choices": [
          "A. Epidural blood patch",
          "B. Increasing oral fluid intake",
          "C. Bed rest",
          "D. Oral analgesics",
          "E. IV caffeine"
        ],
        "answer": "A"
      },
      {
        "question_number": "63",
        "question": "Which statement about postoperative nausea and vomiting (PONV) after ambulatory surgery is false?",
        "choices": [
          "A. It is associated with opiate use.",
          "B. It occurs less frequently following anesthetic induction or maintenance with propofol.",
          "C. Antiemetic therapy should be administered to all patients before ambulatory surgery.",
          "D. It is increased in adults who are not required to ingest oral fluids before discharge.",
          "E. Wound hematoma is not a risk factor for PONV."
        ],
        "answer": "C"
      },
      {
        "question_number": "64",
        "question": "Patients with liver dysfunction may be at an increased risk for surgery. Which of the following statements about this is false?",
        "choices": [
          "A. Laparoscopic surgery can be safely performed in patients with acute hepatitis A.",
          "B. Sevoflurane reduces hepatic arterial blood flow less than halothane.",
          "C. Hypercapnia increases portal blood flow.",
          "D. Fentanyl elimination is not appreciably altered in patients with cirrhosis.",
          "E. Patients with Child class B cirrhosis undergoing cardiac surgery have a high mortality rate."
        ],
        "answer": "A"
      },
      {
        "question_number": "65",
        "question": "A 66-year-old male undergoes laparotomy for perforated diverticulosis. In the intensive care unit (ICU), the patient remains on mechanical ventilation with FiO2 = 0.5 and intravenous (IV) norepinephrine 5 μg/min. The arterial blood gas (ABG) analysis reveals the following: pH, 7.29; PaCO2, 38 mmHg; PaO2, 72 mmHg; HCO3–, 18 mEq/L. The acid–base disturbance is best described as:",
        "choices": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis and respiratory alkalosis",
          "C. Respiratory acidosis and metabolic alkalosis",
          "D. Metabolic acidosis and respiratory acidosis",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "66",
        "question": "A 33-year-old, 70-kg female undergoes a 4-h colon resection under general anesthesia. Intraoperative blood loss is 300 mL, and the patient received 3.5 L of 0.9% saline. In the postanesthesia care unit (PACU), the patient is breathing 2 L oxygen by nasal cannula and receiving IV morphine for analgesia. Vital signs are stable. Laboratory data reveal the following: Na+, 141 mEq/L; Cl–, 115 mEq/L; HCO3–, 18 mEq/L; K+, 3.9 mEq/L; ABGs: pH, 7.34; PaCO2, 33 mmHg; PaO2, 92 mmHg. The most likely etiology of the patient’s laboratory findings is:",
        "choices": [
          "A. Metabolic acidosis secondary to hyperlactatemia",
          "B. Respiratory alkalosis secondary to pain",
          "C. Respiratory acidosis secondary to residual anesthesia",
          "D. Metabolic acidosis secondary to hyperchloremia",
          "E. Respiratory acidosis secondary to morphine"
        ],
        "answer": "D"
      },
      {
        "question_number": "67",
        "question": "An 80-year-old, fully oriented female requires urgent surgery for a small bowel obstruction. She has a preexisting do not resuscitate (DNR) order based on quality-of-life issues. Prior to surgery, what is the best means to address the DNR order?",
        "choices": [
          "A. Recommend to the patient to discontinue the order and reinstate after surgery.",
          "B. Automatically rescind as surgery takes precedence over the order.",
          "C. Automatically maintain the order for surgery.",
          "D. Discuss with patient’s daughter and abide by the daughter’s wishes.",
          "E. Cancel the surgery, if the patient desires to maintain the order for the procedure."
        ],
        "answer": "A"
      },
      {
        "question_number": "68",
        "question": "A 45-year-old male presents for emergency splenectomy following a motor vehicle collision. The patient states that he is a Jehovah’s Witness (JW) and would rather die than take a blood transfusion. The patient’s starting hemoglobin is 8.5 gm%. Which of the following is the most appropriate management in the case of this patient?",
        "choices": [
          "A. Request a consent order to transfuse, if necessary.",
          "B. Administer fresh frozen plasma as a red cell substitute.",
          "C. Honor the patient’s wishes and do not transfuse blood, even if massive hemorrhage ensues.",
          "D. Obtain consent from his spouse to transfuse once anesthesia has been initiated.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "69",
        "question": "A 78-year-old male with a history of hypertension develops acute delirium while recovering in the ICU 2 days following a pancreatectomy for pancreatic cancer. Vitals: BP, 150/100 mmHg; HR, 110 bpm; RR, 20 beats per min; T, 36ºC; SaO2, 99%. Neurologic examination: no focal defects. Lab data: Na+, 130 mEq/L; Glucose, 140 mg%. ABGs: pH, 7.46; PaCO2, 32 mmHg; PaO2, 98 mmHg. Medications: morphine, scopolamine patch, metoprolol, and furosemide. Which of the following is the next best step in this patient’s management?",
        "choices": [
          "A. Administer lorazepam.",
          "B. Continue scopolamine.",
          "C. Initiate free water restriction.",
          "D. Continue morphine.",
          "E. Initiate dexmedetomidine."
        ],
        "answer": "E"
      },
      {
        "question_number": "70",
        "question": "Which of the following statements in regard to delaying elective noncardiac surgery is true?",
        "choices": [
          "A. Elective noncardiac surgery should be delayed for at least 1 week after coronary artery balloon angioplasty without stent placement.",
          "B. Elective noncardiac surgery should be delayed at least 3 months after placement of a bare-metal stent for MI.",
          "C. Risk of stent thrombosis or ischemia after percutaneous coronary intervention (PCI) for MI is minimal, and surgery should not be postponed.",
          "D. Elective noncardiac surgery should ideally be postponed 1 year after drug-eluting stent placement.",
          "E. All of the above."
        ],
        "answer": "D"
      },
      {
        "question_number": "71",
        "question": "Which of the following statements is false regarding urinary retention after ambulatory surgery?",
        "choices": [
          "A. It is most frequently associated with herniorrhaphy and anorectal procedures.",
          "B. It is greater with spinal anesthesia than general anesthesia.",
          "C. It can frequently be asymptomatic.",
          "D. Ambulatory surgery patients may be discharged prior to voiding.",
          "E. It can be caused by excessive administration of IV fluids."
        ],
        "answer": "B"
      },
      {
        "question_number": "72",
        "question": "Initial treatment of a postdural puncture headache (PDPH) after spinal anesthesia for a total knee arthroplasty includes all of the following except:",
        "choices": [
          "A. Epidural blood patch",
          "B. Increasing oral fluid intake",
          "C. Bed rest",
          "D. Oral analgesics",
          "E. IV caffeine"
        ],
        "answer": "A"
      },
      {
        "question_number": "73",
        "question": "Which statement about postoperative nausea and vomiting (PONV) after ambulatory surgery is false?",
        "choices": [
          "A. It is associated with opiate use.",
          "B. It occurs less frequently following anesthetic induction or maintenance with propofol.",
          "C. Antiemetic therapy should be administered to all patients before ambulatory surgery.",
          "D. It is increased in adults who are not required to ingest oral fluids before discharge.",
          "E. Wound hematoma is not a risk factor for PONV."
        ],
        "answer": "C"
      },
      {
        "question_number": "74",
        "question": "Patients with liver dysfunction may be at an increased risk for surgery. Which of the following statements about this is false?",
        "choices": [
          "A. Laparoscopic surgery can be safely performed in patients with acute hepatitis A.",
          "B. Sevoflurane reduces hepatic arterial blood flow less than halothane.",
          "C. Hypercapnia increases portal blood flow.",
          "D. Fentanyl elimination is not appreciably altered in patients with cirrhosis.",
          "E. Patients with Child class B cirrhosis undergoing cardiac surgery have a high mortality rate."
        ],
        "answer": "A"
      },
      {
        "question_number": "75",
        "question": "A 66-year-old male undergoes laparotomy for perforated diverticulosis. In the intensive care unit (ICU), the patient remains on mechanical ventilation with FiO2 = 0.5 and intravenous (IV) norepinephrine 5 μg/min. The arterial blood gas (ABG) analysis reveals the following: pH, 7.29; PaCO2, 38 mmHg; PaO2, 72 mmHg; HCO3–, 18 mEq/L. The acid–base disturbance is best described as:",
        "choices": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis and respiratory alkalosis",
          "C. Respiratory acidosis and metabolic alkalosis",
          "D. Metabolic acidosis and respiratory acidosis",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "76",
        "question": "A 33-year-old, 70-kg female undergoes a 4-h colon resection under general anesthesia. Intraoperative blood loss is 300 mL, and the patient received 3.5 L of 0.9% saline. In the postanesthesia care unit (PACU), the patient is breathing 2 L oxygen by nasal cannula and receiving IV morphine for analgesia. Vital signs are stable. Laboratory data reveal the following: Na+, 141 mEq/L; Cl–, 115 mEq/L; HCO3–, 18 mEq/L; K+, 3.9 mEq/L; ABGs: pH, 7.34; PaCO2, 33 mmHg; PaO2, 92 mmHg. The most likely etiology of the patient’s laboratory findings is:",
        "choices": [
          "A. Metabolic acidosis secondary to hyperlactatemia",
          "B. Respiratory alkalosis secondary to pain",
          "C. Respiratory acidosis secondary to residual anesthesia",
          "D. Metabolic acidosis secondary to hyperchloremia",
          "E. Respiratory acidosis secondary to morphine"
        ],
        "answer": "D"
      },
      {
        "question_number": "77",
        "question": "An 80-year-old, fully oriented female requires urgent surgery for a small bowel obstruction. She has a preexisting do not resuscitate (DNR) order based on quality-of-life issues. Prior to surgery, what is the best means to address the DNR order?",
        "choices": [
          "A. Recommend to the patient to discontinue the order and reinstate after surgery.",
          "B. Automatically rescind as surgery takes precedence over the order.",
          "C. Automatically maintain the order for surgery.",
          "D. Discuss with patient’s daughter and abide by the daughter’s wishes.",
          "E. Cancel the surgery, if the patient desires to maintain the order for the procedure."
        ],
        "answer": "A"
      },
      {
        "question_number": "78",
        "question": "A 45-year-old male presents for emergency splenectomy following a motor vehicle collision. The patient states that he is a Jehovah’s Witness (JW) and would rather die than take a blood transfusion. The patient’s starting hemoglobin is 8.5 gm%. Which of the following is the most appropriate management in the case of this patient?",
        "choices": [
          "A. Request a consent order to transfuse, if necessary.",
          "B. Administer fresh frozen plasma as a red cell substitute.",
          "C. Honor the patient’s wishes and do not transfuse blood, even if massive hemorrhage ensues.",
          "D. Obtain consent from his spouse to transfuse once anesthesia has been initiated.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "79",
        "question": "A 78-year-old male with a history of hypertension develops acute delirium while recovering in the ICU 2 days following a pancreatectomy for pancreatic cancer. Vitals: BP, 150/100 mmHg; HR, 110 bpm; RR, 20 beats per min; T, 36ºC; SaO2, 99%. Neurologic examination: no focal defects. Lab data: Na+, 130 mEq/L; Glucose, 140 mg%. ABGs: pH, 7.46; PaCO2, 32 mmHg; PaO2, 98 mmHg. Medications: morphine, scopolamine patch, metoprolol, and furosemide. Which of the following is the next best step in this patient’s management?",
        "choices": [
          "A. Administer lorazepam.",
          "B. Continue scopolamine.",
          "C. Initiate free water restriction.",
          "D. Continue morphine.",
          "E. Initiate dexmedetomidine."
        ],
        "answer": "E"
      },
      {
        "question_number": "80",
        "question": "Which of the following statements in regard to delaying elective noncardiac surgery is true?",
        "choices": [
          "A. Elective noncardiac surgery should be delayed for at least 1 week after coronary artery balloon angioplasty without stent placement.",
          "B. Elective noncardiac surgery should be delayed at least 3 months after placement of a bare-metal stent for MI.",
          "C. Risk of stent thrombosis or ischemia after percutaneous coronary intervention (PCI) for MI is minimal, and surgery should not be postponed.",
          "D. Elective noncardiac surgery should ideally be postponed 1 year after drug-eluting stent placement.",
          "E. All of the above."
        ],
        "answer": "D"
      }
    ],
    "Chapter 8: Fundamentals of Surgical Technology": [
      {
        "question_number": "1",
        "question": "Which of the following is not a characteristic of carbon dioxide (CO2) as an insufflation gas?",
        "choices": [
          "A. Rapidly absorbed",
          "B. Relatively inexpensive",
          "C. Negligible physiologic consequences",
          "D. Low risk of gas embolism",
          "E. Readily available"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "Which of the following hemodynamic parameters decreases during laparoscopy with CO2 pneumoperitoneum?",
        "choices": [
          "A. Mean arterial pressure",
          "B. Pulmonary vascular resistance",
          "C. Systemic vascular resistance",
          "D. Heart rate",
          "E. Peripheral blood flow"
        ],
        "answer": "E"
      },
      {
        "question_number": "3",
        "question": "Which of the following conditions represents a contraindication to advanced laparoscopic operations?",
        "choices": [
          "A. Pregnancy",
          "B. Morbid obesity",
          "C. Contraindication to general anesthesia",
          "D. Previous laparotomy",
          "E. Cirrhosis"
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "Which of the following does not routinely increase during laparoscopic surgery?",
        "choices": [
          "A. Airway pressure",
          "B. Pulmonary capillary wedge pressure",
          "C. Vital capacity",
          "D. Diaphragmatic excursion",
          "E. Intrathoracic pressure"
        ],
        "answer": "C"
      },
      {
        "question_number": "5",
        "question": "Which of the following is not a recommended technique for initial trocar placement during laparoscopic surgery?",
        "choices": [
          "A. Veress needle insufflation followed by blind trocar placement",
          "B. Open placement of a Hasson cannula without pneumoperitoneum",
          "C. Optical trocar placement",
          "D. Blind trocar placement without pneumoperitoneum",
          "E. All of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "Which of the following insufflation gases should not be used with radiofrequency (RF) electrosurgery (“electrocautery”)?",
        "choices": [
          "A. CO2",
          "B. Nitrous oxide",
          "C. Argon",
          "D. Helium",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "7",
        "question": "Select the most appropriate site for initial trocar placement in a patient undergoing laparoscopic Nissen fundoplication with a previous midline scar from the xiphoid to the pubis:",
        "choices": [
          "A. Umbilical",
          "B. Suprapubic",
          "C. Left upper quadrant",
          "D. Left lower quadrant",
          "E. Right upper quadrant"
        ],
        "answer": "C"
      },
      {
        "question_number": "8",
        "question": "Thirty minutes into a laparoscopic procedure, visualization becomes inadequate to proceed. The insufflation monitor shows an intraabdominal pressure of 20 mmHg and no flow of CO2. What is the most likely explanation?",
        "choices": [
          "A. An empty CO2 canister",
          "B. CO2 leak from the abdominal wall",
          "C. Inadequate muscle relaxation",
          "D. Improper insufflator settings",
          "E. Dislodged insufflation tubing"
        ],
        "answer": "C"
      },
      {
        "question_number": "9",
        "question": "Shortly following CO2 insufflation, the heart rate of an otherwise healthy 50-year-old woman undergoing laparo scopic cholecystectomy decreases to 40 beats/min. What is the most likely cause of her bradycardia?",
        "choices": [
          "A. Gas embolism",
          "B. Unrecognized hemorrhage",
          "C. CO2 pneumoperitoneum",
          "D. Anesthetic drugs",
          "E. Capnothorax"
        ],
        "answer": "C"
      },
      {
        "question_number": "10",
        "question": "During laparoscopic paraesophageal hernia repair, the patient’s end-tidal CO2 increases to 48 mmHg and the airway pressure rises. Blood pressure and heart rate are stable. What is the most appropriate next step?",
        "choices": [
          "A. Place a chest tube for capnothorax.",
          "B. Increase minute ventilation.",
          "C. Convert to an open operation.",
          "D. Immediately desufflate the abdomen.",
          "E. Proceed with the intervention."
        ],
        "answer": "B"
      },
      {
        "question_number": "11",
        "question": "Which of the following is true regarding infection, tumor growth, and laparoscopic surgery?",
        "choices": [
          "A. Immunosuppression is increased in comparison with an open surgery.",
          "B. The acute-phase proteins interleukin-6 (IL-6) and C-reactive protein are elevated after laparotomy.",
          "C. The catecholamine response after laparoscopy is reduced in comparison to laparotomy.",
          "D. Current studies demonstrate increased port site metastasis after a laparoscopic colectomy.",
          "E. Survival is improved after a laparoscopic colon resection."
        ],
        "answer": "C"
      },
      {
        "question_number": "12",
        "question": "Following insertion of a Veress needle, what is the initial maneuver to confirm intraperitoneal placement?",
        "choices": [
          "A. Saline drop test",
          "B. Aspiration of the needle",
          "C. Flushing the needle",
          "D. Measuring insufflation pressure",
          "E. Starting high-flow insufflation"
        ],
        "answer": "B"
      },
      {
        "question_number": "13",
        "question": "Which of the following is not a potential advantage of robotic-assisted laparoscopy compared with standard laparoscopy?",
        "choices": [
          "A. Improved ergonomics",
          "B. Reduced operative times",
          "C. Increased manual dexterity",
          "D. Reduced fatigue of assistants",
          "E. Elimination of tremor"
        ],
        "answer": "B"
      },
      {
        "question_number": "14",
        "question": "In the United States, recommendations for human natural orifice transluminal endoscopic surgery (NOTES) procedures from the Natural Orifice Surgery Consortium for Assessment and Research (NOSCAR) include which of the following?",
        "choices": [
          "A. Informed consent",
          "B. Institutional Review Board (IRB)-approved research protocol",
          "C. Use of laparoscopy to confirm hemostasis and security of luminal closure",
          "D. Inclusion of cases in a national NOTES registry",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "15",
        "question": "A major disadvantage of a flexible fiberoptic endoscope is:",
        "choices": [
          "A. Loops in the scope",
          "B. Image quality",
          "C. Size of the scope",
          "D. Fragility of the fibers",
          "E. Inadequate scope length"
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "Endoscopy equipment requires thorough cleaning after each use; however, sterilization is not attained. Many cleaning methods exist, but the advantage of disinfecting equipment with glutaraldehyde as opposed to ethylene oxide gas is which of the following?",
        "choices": [
          "A. Removes gross contaminants",
          "B. Does not require an overnight cycle",
          "C. Less toxic",
          "D. Less corrosive on equipment",
          "E. Does not require gross contaminant removal"
        ],
        "answer": "B"
      },
      {
        "question_number": "17",
        "question": "A 68-year-old male with a history of a cardiac murmur is being scheduled for a screening colonoscopy. Which of the follow is true regarding antibiotic prophylaxis for endocardi tis prevention?",
        "choices": [
          "A. Prophylactic antibiotics are indicated in a patient with a prosthetic mitral valve with planned colonoscopy.",
          "B. Prophylactic antibiotics are indicated in instances of mitral regurgitation with planned colonoscopy polypectomy.",
          "C. Prophylactic antibiotics are indicated in a patient with a prosthetic mitral valve with planned esophagogastroduo denoscopy (EGD).",
          "D. Prophylactic antibiotics are indicated in a patient with a prosthetic mitral valve with planned sclerotherapy of esophageal varices.",
          "E. Not indicated in any of the above scenarios."
        ],
        "answer": "D"
      },
      {
        "question_number": "18",
        "question": "A 50-year-old male presents with complaint of melena for 1 month with associated fatigue and weight loss. Which of the following is true regarding common bowel preparations available?",
        "choices": [
          "A. Ideal preparations allow fluid and electrolyte balance shifts.",
          "B. Iso-osmotic preparations contain polyethylene glycol.",
          "C. During active colitis, bowel preparations do not cause mucosal changes that may alter pathologic diagnosis.",
          "D. Hyperosmotic preparations are safe in renal failure patients.",
          "E. Iso-osmotic preparations are osmotic balance absorbable electrolyte solutions."
        ],
        "answer": "B"
      },
      {
        "question_number": "19",
        "question": "A commonly available over-the-counter bowel preparation is magnesium citrate. Which of the following is true regarding hyperosmotic preparations?",
        "choices": [
          "A. They cause limited fluid influx into the lumen of the bowel.",
          "B. They are safe to use in renal failure.",
          "C. They lead to cholecystokinin release to stimulate fluid secretion and promote intestinal motility.",
          "D. Oral phosphates given in large doses for bowel prepara tion can lead to hypophosphatemia and hypercalcemia.",
          "E. They require large volume ingestion to obtain results."
        ],
        "answer": "C"
      },
      {
        "question_number": "20",
        "question": "A 35-year-old female presenting with newly diagnosed choledocholithiasis is being prepared for endoscopic retrograde cholangiopancreatography (ERCP) under general anesthesia. Which screening tests should be done?",
        "choices": [
          "A. Basic metabolic panel (BMP)",
          "B. Partial prothrombin time (PTT)/prothrombin time (PT)/ international normalized ratio (INR)",
          "C. Pregnancy",
          "D. Type and screen",
          "E. All of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "21",
        "question": "According to the American Society of Anesthesiology (ASA) task force, what is the primary cause of morbidity in patients undergoing endoscopy?",
        "choices": [
          "A. Airway obstruction",
          "B. Perforation of gastrointestinal (GI) tract",
          "C. Hypotension",
          "D. Bleeding",
          "E. Pharyngeal trauma"
        ],
        "answer": "A"
      },
      {
        "question_number": "22",
        "question": "A 78-year-old male underwent EGD for evaluation of dysphagia. Endoscope insertion was difficult, and postproce dure, the surgeon is concerned about perforation. Which of the following is an early sign of possible perforation?",
        "choices": [
          "A. Chest wall rigidity",
          "B. Hypotension",
          "C. Hypoxia",
          "D. Neck stiffness",
          "E. Cervical crepitus"
        ],
        "answer": "E"
      },
      {
        "question_number": "23",
        "question": "Routine upper endoscopy usually requires the patients to be on their left side. Under what circumstance would you need to position the patients on their right side for an upper endoscopy procedure?",
        "choices": [
          "A. Barrett’s esophagus",
          "B. Acute upper GI bleed",
          "C. Unable to intubate the pylorus",
          "D. Unable to navigate past an esophageal stricture",
          "E. Esophageal varix banding"
        ],
        "answer": "B"
      },
      {
        "question_number": "24",
        "question": "On reaching the duodenal bulb, what technical scope manipulations will allow maneuvering of the sharp turn of the superior angle of the duodenum?",
        "choices": [
          "A. Dial down, dial right, rotate shaft clockwise",
          "B. Dial up, dial left, rotate shaft counterclockwise",
          "C. Dial up, dial right, rotate shaft clockwise",
          "D. Dial up, dial right, rotate shaft counterclockwise",
          "E. Dial down, dial left, rotate shaft clockwise"
        ],
        "answer": "C"
      },
      {
        "question_number": "25",
        "question": "A 45-year-old male whose uncle died of colon cancer schedules an appointment to discuss his need for screening colonoscopy. When should he have his first screening colonoscopy, and what should be the frequency of his endoscopic follow-up?",
        "choices": [
          "A. Immediately and then every 5 years",
          "B. Immediately and then every 10 years",
          "C. Starting at age 50 and then every 10 years",
          "D. Starting at age 50 and then every 5 years",
          "E. Starting 10 years prior to the age his uncle was diagnosed and then every 5 years"
        ],
        "answer": "C"
      },
      {
        "question_number": "26",
        "question": "A 25-year-old female with newly diagnosed familial adenomatous polyposis (FAP) returns to the surgical office to discuss continued care and treatment. Which of the following is true about the endoscopic care of FAP?",
        "choices": [
          "A. Individuals at risk or affected by FAP need an annual screening colonoscopy or flexible sigmoidoscopy beginning at 25 years of age.",
          "B. In addition to colon cancer, FAP patients must also undergo annual computed tomography (CT) enterography for small bowel carcinoma screening.",
          "C. Postsurgical surveillance should include lower endoscopy of rectum or ileal pouch every 3 years.",
          "D. Stomach endoscopic screening includes random fundic gland polyp sampling and requires surgical resection for low-grade dysplasia.",
          "E. Gastric and duodenal screening should start at 25 to 30 years of age and be repeated routinely depending on the Spigelman stage of polyposis."
        ],
        "answer": "E"
      },
      {
        "question_number": "27",
        "question": "On insertion of the colonoscope, the rectum of a 68-year-old female with a history of a hysterectomy was easily traversed. The rectosigmoid junction was then encountered, and advancement was difficult. Which of the following is a useful technique to pass the rectosigmoid junction?",
        "choices": [
          "A. Partially withdraw and “jiggle” the scope.",
          "B. Torque tip around the junction to keep the sigmoid loop short.",
          "C. Advance scope making a large loop and reduce the loop after entering descending colon.",
          "D. Apply external pressure to sigmoid to hold down the loop and prevent further scope looping.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "28",
        "question": "Relative segments of the colon are identifiable by their endoscopic appearance. Which of the following is true?",
        "choices": [
          "A. The splenic flexure is readily identifiable by a slight bluish discoloration.",
          "B. The sigmoid and descending colon are much larger in diameter and distend more easily.",
          "C. A triangle appearance of the transverse colon makes it easily identifiable.",
          "D. On passing the hepatic flexure, the diameter decreases as the ascending colon is entered.",
          "E. Cecal confirmation requires only transillumination in the right lower quadrant."
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "A 58-year-old male arriving for his routine screening colonoscopy admits that he had difficulty completing all of the prescribed bowel preparation. As the colonoscopy is started, significant stool burden is identified. Which of the following is correct?",
        "choices": [
          "A. Continue procedure.",
          "B. Irrigate with silicone particle-based antifoam.",
          "C. Insufflate to expose.",
          "D. Aggressively irrigate stool from mucosa.",
          "E. Abandon and reschedule."
        ],
        "answer": "E"
      },
      {
        "question_number": "30",
        "question": "A 48-year-old female with a family history of colorectal cancer underwent screening colonoscopy. During colonoscopy, a large, yellowish nonobstructing lesion was identified within the sigmoid (Fig. 8-B.1). Which of the following is correct?",
        "choices": [
          "A. Documentation by photo as characteristics are not concerning",
          "B. Excision by piecemeal polypectomy",
          "C. Cold biopsy alone is sufficient",
          "D. Excision by snare polypectomy",
          "E. Excision by saline mucosal elevation"
        ],
        "answer": "A"
      },
      {
        "question_number": "31",
        "question": "A 78-year-old male on postoperative day 3 after an emergent abdominal aortic aneurysm repair experiences hematochezia, abdominal distention, and worsening clinical status. Emer gent endoscopy is planned to assess for ischemia. What can be done to minimize the risk for insertion trauma?",
        "choices": [
          "A. Complete colonoscopy quickly to limit the amount of insufflation.",
          "B. Use carbon dioxide for insufflation.",
          "C. Use higher insufflation pressures to allow for thorough mucosal evaluation.",
          "D. Position the patient on his back.",
          "E. Rigid proctoscope alone is sufficient to assess for colonic ischemia."
        ],
        "answer": "B"
      },
      {
        "question_number": "32",
        "question": "A 28-year-old female presents with symptoms consistent with choledocholithiasis, and an ERCP is planned. Which of the following has been used to successfully reduce the risk for pancreatitis with ERCP?",
        "choices": [
          "A. Allopurinol",
          "B. Balloon dilation instead of sphincterotomy",
          "C. Selective bile duct cannulation prior to contrast injection",
          "D. Somatostatin",
          "E. Rectal acetaminophen"
        ],
        "answer": "C"
      },
      {
        "question_number": "33",
        "question": "During an ERCP for retained stone after laparoscopic cholecystectomy, a ballooned sphincteroplasty was performed for stone extraction. Bleeding was noted at the site of sphincteroplasty during the procedure. Which of the following is the most efficacious technique utilized for hemostasis?",
        "choices": [
          "A. Band ligation",
          "B. Endoscopic clips",
          "C. Argon plasma coagulation",
          "D. Balloon tamponade",
          "E. Epinephrine injection"
        ],
        "answer": "D"
      },
      {
        "question_number": "34",
        "question": "During an EGD for acute upper GI bleeding, active bleeding from a visible vessel was identified. Vessels up to what size are typically controlled by coaptive thermal techniques?",
        "choices": [
          "A. 1 mm",
          "B. 1.5 mm",
          "C. 2 mm",
          "D. 2.5 mm",
          "E. 3 mm"
        ],
        "answer": "C"
      },
      {
        "question_number": "35",
        "question": "During an EGD for acute upper GI bleeding, active bleeding from a shallow gastric ulcer was identified. Hemostasis was achieved by epinephrine injection. Several factors have been identified that are associated with the risk for rebleeding. Which of the following is NOT a risk factor for rebleeding?",
        "choices": [
          "A. Ulcer size",
          "B. Pigmented dark adherent clot",
          "C. Visible vessel",
          "D. Anemia",
          "E. Age > 40 years"
        ],
        "answer": "E"
      },
      {
        "question_number": "36",
        "question": "A 68-year-old male with significant dysphagia after a stroke underwent percutaneous gastrostomy tube placement for use during his rehabilitation. Which of the following is NOT a contraindication to percutaneous endoscopic gastrostomy (PEG) tube placement?",
        "choices": [
          "A. Ascites",
          "B. Gastric dysmotility",
          "C. Diffuse gastric cancer",
          "D. Combative, neurologically altered patients",
          "E. Head and neck cancer"
        ],
        "answer": "E"
      },
      {
        "question_number": "37",
        "question": "Multiple techniques of PEG tube placement have been described. Which of the following describes the safe tract technique?",
        "choices": [
          "A. Insufflation of the stomach with palpation of the gastric wall visible endoscopically",
          "B. Insufflation of the stomach and transillumination of the anterior abdominal wall through the gastric wall with the endoscope light source",
          "C. Visualization of needle entering gastric lumen endoscopically",
          "D. Continuous aspiration with saline-filled syringe observing for air or enteric contents prior to endoscopic visualization of needle in gastric lumen",
          "E. Combined endoscopic and laparoscopic PEG insertion allowing confirmation of only gastric penetration by PEG tube"
        ],
        "answer": "D"
      },
      {
        "question_number": "38",
        "question": "Which of the following most accurately represents the average speed at which ultrasound waves move through the human body?",
        "choices": [
          "A. 350 m/s",
          "B. 2000 m/s",
          "C. 500 cm/s",
          "D. 1540 m/s",
          "E. 800 m/s"
        ],
        "answer": "D"
      },
      {
        "question_number": "39",
        "question": "Concerning acoustic impedance, which of the following statements is true?",
        "choices": [
          "A. It can be amplified by increasing the gain on the ultrasound equipment.",
          "B. It is influenced by the density of the tissue and the velocity of the sound wave.",
          "C. It permits the operator to distinguish between two structures even if their densities are the same.",
          "D. It is calculated by multiplying the amplitude of the waves by the density of the tissue.",
          "E. The greater the difference in impedance between two tissues, the lesser the energy reflected to the transducer."
        ],
        "answer": "B"
      },
      {
        "question_number": "40",
        "question": "Which of the following statements regarding transducers is false?",
        "choices": [
          "A. Higher-frequency transducers have poor penetration and good resolution.",
          "B. The higher the frequency, the shorter the wavelength.",
          "C. Longer wavelengths result in deeper penetration.",
          "D. Axial resolution is independent of frequency.",
          "E. The piezoelectric effect is defined as the “conversion of electrical to mechanical energy.”"
        ],
        "answer": "D"
      },
      {
        "question_number": "41",
        "question": "Which of the following descriptors regarding echogenicity is not true?",
        "choices": [
          "A. Hyperechoic tissues are brighter than the surrounding tissue.",
          "B. Hypoechoic tissues are less bright than the surrounding tissue.",
          "C. Isoechoic tissues are similar in appearance to the surrounding tissue.",
          "D. Anechoic tissues appear as black sonographic images.",
          "E. Simple cysts are hyperechoic."
        ],
        "answer": "E"
      },
      {
        "question_number": "42",
        "question": "Which of the following is not characteristic of the sono graphic appearance of a malignant thyroid nodule?",
        "choices": [
          "A. Hypoechoic in comparison with the surrounding tissue",
          "B. Peripheral calcifications",
          "C. Irregular margins",
          "D. Absence of cystic areas",
          "E. Heterogeneity"
        ],
        "answer": "B"
      },
      {
        "question_number": "43",
        "question": "Which of the following statements regarding focused abdominal sonography for trauma (FAST) is true?",
        "choices": [
          "A. It can reliably evaluate the retroperitoneum.",
          "B. It can quickly detect the presence of pericardial fluid or a pleural effusion.",
          "C. It is useful in detecting a cardiac contusion.",
          "D. It is considered a replacement for computed tomography (CT).",
          "E. It can reliably detect diaphragmatic injuries."
        ],
        "answer": "B"
      },
      {
        "question_number": "44",
        "question": "Which of the following is not a sonographic characteristic of an inflamed gallbladder?",
        "choices": [
          "A. Gallbladder distention",
          "B. Pericholecystic fluid",
          "C. Wall thickness of 2 mm",
          "D. Sonographic Murphy’s sign",
          "E. Gallstones"
        ],
        "answer": "C"
      },
      {
        "question_number": "45",
        "question": "Regarding vascular arterial ultrasound imaging, which of the following statements is true?",
        "choices": [
          "A. In Doppler ultrasound of blood flow, the reflected wave returning to the transducer has the same frequency as the transmitted wave.",
          "B. For Doppler ultrasound, the transducer should be held at a 90-degree angle to the body.",
          "C. Arterial stenosis leads to decreased flow velocity.",
          "D. Carotid artery duplex ultrasound scanning allows assessment of arterial plaque morphology, as well as estimation of the degree of carotid artery stenosis caused by the plaque.",
          "E. In dialysis access patients, duplex ultrasonography does not generally assess arterial inflow for arteriovenous (AV) fistulas or grafts accurately."
        ],
        "answer": "D"
      },
      {
        "question_number": "46",
        "question": "What is the least desirable angle to determine the Doppler frequency shift?",
        "choices": [
          "A. Zero degrees",
          "B. 35 degrees",
          "C. 45 degrees",
          "D. 60 degrees",
          "E. 90 degrees"
        ],
        "answer": "E"
      },
      {
        "question_number": "47",
        "question": "Which of the following statements regarding acoustic shadowing is false?",
        "choices": [
          "A. It is the result of the reflection of sound waves.",
          "B. It is the result of the refraction of sound waves.",
          "C. It is the result of the absorption of sound waves.",
          "D. Gases cause high acoustic shadowing.",
          "E. None of the above."
        ],
        "answer": "B"
      },
      {
        "question_number": "48",
        "question": "Posterior enhancement is most significant for which structure?",
        "choices": [
          "A. Bone",
          "B. Fat",
          "C. Cyst",
          "D. Muscle",
          "E. Stone"
        ],
        "answer": "C"
      },
      {
        "question_number": "49",
        "question": "In which of the following scenarios would one most likely expect mirror image artifact?",
        "choices": [
          "A. Ultrasound for FAST examination",
          "B. Ultrasound of the gallbladder in the evaluation of cholecystitis",
          "C. Ultrasound of the renal pelvis in the evaluation of stone disease",
          "D. Ultrasound of the bladder",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "50",
        "question": "Which of the following findings is consistent with perforated acute appendicitis?",
        "choices": [
          "A. External diameter > 4 cm",
          "B. Compressible cecum",
          "C. Asymmetric appendiceal thickening",
          "D. Fluid within the lumen of the appendix",
          "E. Appendicolith"
        ],
        "answer": "C"
      },
      {
        "question_number": "51",
        "question": "Which of the following statements regarding ultrasound of the small bowel is false?",
        "choices": [
          "A. The most prominent layers of the small bowel are the submucosa (bright) and muscularis propria (dark).",
          "B. Normal small bowel wall thickness is less than 3 mm.",
          "C. Doppler ultrasound can be used to demonstrate normal bowel wall vascularity.",
          "D. Normal small bowel loops are compliant, easily dis placed, and demonstrate slow peristalsis.",
          "E. Exaggerated or decreased peristalsis as well as increased bowel wall thickening is a sign of abnormal small bowel."
        ],
        "answer": "C"
      },
      {
        "question_number": "52",
        "question": "When performing sonography of the pediatric abdomen, all of the following are true except:",
        "choices": [
          "A. In a child with malrotation, the superior mesenteric artery (SMA) will be on the right and the superior mesenteric vein (SMV) will be on the left on a transverse view of the abdomen.",
          "B. If the patient has intussusception, you will see target sign on a longitudinal view.",
          "C. Splenic torsion will show a high position of the spleen.",
          "D. Constipation can be diagnosed on ultrasound.",
          "E. Commonly used for diagnosis of pyloric stenosis."
        ],
        "answer": "C"
      },
      {
        "question_number": "53",
        "question": "During laparoscopic cholecystectomy, the so-called “Mickey Mouse” view of the hepatoduodenal ligament can be obtained with laparoscopic ultrasound to help delineate important anatomy. Which of the following lists all of the structures seen when the proper view is obtained?",
        "choices": [
          "A. Portal vein, common hepatic duct, and inferior vena cava (IVC)",
          "B. Portal vein, common hepatic duct, and hepatic artery",
          "C. Portal vein, common hepatic duct, and cystic artery",
          "D. Portal vein, common bile duct, and hepatic artery",
          "E. Portal vein, common bile duct, and cystic artery"
        ],
        "answer": "D"
      },
      {
        "question_number": "54",
        "question": "Current can be diverted from the targeted tissue of interest by all of the following except:",
        "choices": [
          "A. Insulation failure",
          "B. Direct coupling",
          "C. Antenna coupling",
          "D. Capacitative coupling",
          "E. Facilitative coupling"
        ],
        "answer": "E"
      },
      {
        "question_number": "55",
        "question": "All of the following are true regarding the use of argon gas in argon devices with the exception of:",
        "choices": [
          "A. Known risk of gas emboli",
          "B. Known risk of pneumatosis",
          "C. Known risk of intraabdominal hypertension",
          "D. Known risk of arrhythmia",
          "E. Noncontact fulguration of the tissues"
        ],
        "answer": "E"
      },
      {
        "question_number": "56",
        "question": "Using the “pure cut” function on a monopolar instrument results in tissue:",
        "choices": [
          "A. Desiccation",
          "B. Vaporization",
          "C. Fulguration",
          "D. Ablation",
          "E. Coagulation"
        ],
        "answer": "B"
      },
      {
        "question_number": "57",
        "question": "Monopolar instruments have:",
        "choices": [
          "A. Only a dispersive electrode",
          "B. Only an active electrode",
          "C. Two active and one dispersive electrode",
          "D. Both an active and a dispersive electrode, with a separate “grounding pad”",
          "E. Both an active and a dispersive electrode, in which the “grounding pad” is the dispersive electrode"
        ],
        "answer": "E"
      },
      {
        "question_number": "58",
        "question": "Which of the following is most ideal when sealing a vessel?",
        "choices": [
          "A. Continuous low-voltage waveforms",
          "B. Continuous high-voltage waveforms",
          "C. Intermittent low-voltage waveforms",
          "D. Intermittent high-voltage waveforms",
          "E. Intermittent alternating voltage waveforms"
        ],
        "answer": "A"
      },
      {
        "question_number": "59",
        "question": "Choose the best placement for the location of the dispersive electrode:",
        "choices": [
          "A. Over the hip of a patient with a history of a hip replacement",
          "B. Over the hip of a patient without a history of hip replacement",
          "C. Over the lateral thigh",
          "D. Over the anterior thigh in a patient with a history of skin graft at this site",
          "E. Over the wrist"
        ],
        "answer": "C"
      },
      {
        "question_number": "60",
        "question": "With regard to bipolar and monopolar devices:",
        "choices": [
          "A. Both use direct current (DC).",
          "B. Both use alternating current (AC).",
          "C. Bipolar uses AC, while monopolar uses DC.",
          "D. Bipolar uses DC, while monopolar uses AC.",
          "E. Neither requires an electrosurgical unit (ESU)."
        ],
        "answer": "B"
      },
      {
        "question_number": "61",
        "question": "Which of the following regarding ultrasonic energy devices is true?",
        "choices": [
          "A. They use DC.",
          "B. They use AC.",
          "C. They require a dispersive electrode.",
          "D. They generate smoke, similar to electrosurgical devices.",
          "E. Thermal spread is equivalent to electrosurgical devices."
        ],
        "answer": "B"
      },
      {
        "question_number": "62",
        "question": "Which of the following regarding the pediatric population and electrosurgery is true?",
        "choices": [
          "A. In neonates, the dispersive electrodes should be placed over the abdomen.",
          "B. It is permissible to use monopolar devices on infants less than 1 lb.",
          "C. Smaller anatomy requires smaller instruments and therefore less chance of thermal injury.",
          "D. Infant tissue is a good conductor of current.",
          "E. It is acceptable to cut an adult dispersive electrode to size on a neonate in an emergency situation."
        ],
        "answer": "D"
      },
      {
        "question_number": "63",
        "question": "What is the first step to take if there is an intraoperative fire?",
        "choices": [
          "A. Remove all burning drapes from the patient",
          "B. Turn off insufflation gas",
          "C. Turn off all anesthetic gases",
          "D. Extinguish the fire",
          "E. Initiate Code Red Alert per hospital protocol"
        ],
        "answer": "C"
      },
      {
        "question_number": "64",
        "question": "Electromagnetic interference is a concern for patients with pacemakers when using energy devices. Of the following, which device would not generate any electromagnetic interference?",
        "choices": [
          "A. Monopolar electrosurgical device",
          "B. Monopolar endoscopic device",
          "C. Radiofrequency ablation (RFA)",
          "D. Ultrasonic device",
          "E. Bipolar electrosurgical device"
        ],
        "answer": "D"
      },
      {
        "question_number": "65",
        "question": "A 65-year-old male with metastatic colon cancer to his liver presents to the hepatology clinic to discuss treatment options. Due to his comorbidities and significant disease burden, he is suggested to undergo RFA of his liver lesions. Which of the following are possible pitfalls regarding the use of RFA?",
        "choices": [
          "A. Incomplete ablation of the tumor",
          "B. Uneven delivery of energy",
          "C. Damage to surrounding tissues",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "66",
        "question": "All of the following are true for RFA as opposed to micro wave ablation, except for which of the following?",
        "choices": [
          "A. Requires a dispersive electrode",
          "B. Uses alternating low-voltage current",
          "C. Uses dielectric tissue heating, which is not affected by tissue impedance",
          "D. Heat is transferred by conduction as opposed to radiation",
          "E. None of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "67",
        "question": "After successful treatment by RFA, which of the following is the most appropriate recommendation for follow-up?",
        "choices": [
          "A. Ultrasound examination 1 week postoperatively and then at 3-month intervals",
          "B. Magnetic resonance imaging (MRI) 2 weeks after surgery and then at 6-month intervals",
          "C. MRI every 3 months after surgery",
          "D. Computed tomography (CT) 1 week postoperatively and then at 3-month intervals",
          "E. Positron emission tomography (PET)-CT every 3 months after surgery."
        ],
        "answer": "D"
      }
    ]
  },
  "SECTION II: ACUTE AND CRITICAL CARE": {
    "Chapter 9: Critical Care": [
      {
        "question_number": "1",
        "question": "An 18-year-old man has a 12-h history of vague, perium bilical abdominal pain, anorexia, and nonbilious vomiting. The pain is localized to the right lower quadrant. On examination, he is found to have tenderness over McBur ney’s point. Which of the following best explains the localization of pain in the right lower quadrant of the abdomen?",
        "choices": [
          "A. Inflammation of the visceral peritoneum’s visceral nerve fibers",
          "B. Inflammation of the visceral peritoneum’s somatic nerve fibers",
          "C. Inflammation of the parietal peritoneum’s parietal nerve fibers",
          "D. Inflammation of the parietal peritoneum’s somatic nerve fibers",
          "E. Distention of the appendiceal lumen"
        ],
        "answer": "D"
      },
      {
        "question_number": "2",
        "question": "A 65-year-old man presents to the emergency room with epigastric pain of several days’ duration. He has not eaten in 3 days. He has felt dizzy since the morning of admission. Two weeks ago, his rheumatologist prescribed 800 mg of ibuprofen every 6 h for joint pain. He is alert, oriented, and well appearing in the triage bay. Which of the following findings does NOT suggest shock in this patient with abdominal pain?",
        "choices": [
          "A. Diaphoresis",
          "B. Pallor",
          "C. Altered mental status",
          "D. Heart rate 110 beats/min",
          "E. Systolic blood pressure 100 mmHg"
        ],
        "answer": "E"
      },
      {
        "question_number": "3",
        "question": "Which of the following statements is true regarding normal peritoneal fluid?",
        "choices": [
          "A. The abdominal cavity contains 150 to 200 mL of fluid.",
          "B. The abdominal cavity contains fluid that is isotonic to blood.",
          "C. The protein content of peritoneal fluid is 3 g/dL.",
          "D. Mesothelial cells absorb solutes via gradient-driven passive osmosis.",
          "E. Inflammation of the peritoneum increases its permeability."
        ],
        "answer": "E"
      },
      {
        "question_number": "4",
        "question": "Which of the following statements about bacterial contamina tion of the peritoneal cavity is false?",
        "choices": [
          "A. Bacterial contamination of the peritoneum triggers degranulation of mesothelial cells, which initiates the systemic inflammatory response.",
          "B. Once the systemic response is initiated, the endothelial cells increase their permeability to complement, opsonins, and fibrin.",
          "C. Serum levels of catecholamines decrease in response to mast cell degranulation.",
          "D. Ninety percent of the bacteria are cleared by phagocytosis and the reticular endothelial system.",
          "E. Bacteria in the peritoneum may enter the systemic circulation through subdiaphragmatic lymphatics."
        ],
        "answer": "C"
      },
      {
        "question_number": "5",
        "question": "A 55-year-old man comes to the emergency department with a 6-h history of acute, diffuse abdominal pain. On examina tion, his heart rate is 115 beats per min, his blood pressure is 95/60 mmHg, his respiratory rate is 22 breaths per min, and his oxygen saturation is 93% on a 4-L nasal cannula. He is alert, is answering questions without dyspnea, and has diffuse abdominal rigidity and tenderness. Upright chest x-ray demonstrates extraluminal air under the diaphragm. Initial management should be:",
        "choices": [
          "A. Immediate administration of broad-spectrum intravenous antibiotics",
          "B. Rapid infusion of 2 L of intravenous crystalloid through a peripheral venous catheter",
          "C. Rapid infusion of 2 L of intravenous crystalloid through a central venous catheter",
          "D. Immediate endotracheal intubation for airway control",
          "E. Rapid transport to Radiology for a stat computed tomography (CT) scan"
        ],
        "answer": "B"
      },
      {
        "question_number": "6",
        "question": "Regarding the patient in Question 5, which of the following statements is true?",
        "choices": [
          "A. No further radiologic workup is required.",
          "B. CT scanning with intravenous contrast is required to confirm the diagnosis.",
          "C. Bedside sonographic imaging is preferred over CT imaging to confirm the diagnosis.",
          "D. Diagnostic peritoneal lavage can be performed at the bedside to rule out intestinal perforation.",
          "E. An abdominal x-ray series is needed to confirm the diagnosis."
        ],
        "answer": "A"
      },
      {
        "question_number": "7",
        "question": "A 35-year-old woman experiences an acute onset of epigas tric and right upper quadrant pain several hours after a large dinner. She has had similar episodes in the past that resolved after a few hours. This episode persists, and she has fever and nonbilious vomiting. What is the most likely source of the abdominal pain?",
        "choices": [
          "A. Perforated ulcer",
          "B. Acute appendicitis",
          "C. Bowel obstruction",
          "D. Cholecystitis",
          "E. Diverticulitis"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "A 60-year-old man with chronic alcoholism awakens at 3:00 a.m. with severe, sharp epigastric pain. Three hours later, he develops diffuse abdominal pain. What is the most likely source of the abdominal pain?",
        "choices": [
          "A. Perforated ulcer",
          "B. Acute appendicitis",
          "C. Bowel obstruction",
          "D. Cholecystitis",
          "E. Diverticulitis"
        ],
        "answer": "A"
      },
      {
        "question_number": "9",
        "question": "A 55-year-old man with a 2-day history of abdominal distention, vomiting, crampy abdominal pain, and obstipation is experienc ing severe, diffuse abdominal pain. What is the most likely source of the abdominal pain?",
        "choices": [
          "A. Perforated ulcer",
          "B. Acute appendicitis",
          "C. Bowel obstruction",
          "D. Cholecystitis",
          "E. Diverticulitis"
        ],
        "answer": "C"
      },
      {
        "question_number": "10",
        "question": "A 65-year-old man with a history of chronic constipation has a 3-day history of abdominal distention without a bowel movement. He has fever and abdominal pain in the left lower quadrant. What is the most likely source of the abdominal pain?",
        "choices": [
          "A. Perforated ulcer",
          "B. Acute appendicitis",
          "C. Bowel obstruction",
          "D. Cholecystitis",
          "E. Diverticulitis"
        ],
        "answer": "E"
      },
      {
        "question_number": "11",
        "question": "A 65-year-old alcoholic man has been experiencing epigastric and periumbilical pain associated with non bilious vomiting for one day. He denies melena or hematemesis. In the past, he has had several episodes of similar pain that sometimes radiated to the back. He denies any previous surgery or medical problems. He is afebrile; his blood pressure is 120/80 mmHg, his pulse is 110 beats per min, and his mucous membranes are dry. His abdomen is not distended and does not have any surgical scars. Bowel sounds are present but diminished. His abdomen is soft, and he exhibits voluntary guarding of the epigastrium. His serum amylase level is 550 U/L. A CT scan is performed on admission to the hospital. Which of the following findings requires immediate intervention?",
        "choices": [
          "A. Diffuse pancreatitis with patchy areas of necrosis",
          "B. Pancreatic pseudocyst formation measuring 3 cm in diameter without findings of intestinal obstruction",
          "C. Diffuse pancreatitis with splenic vein thrombosis",
          "D. Diffuse pancreatitis with nonbleeding splenic artery pseudoaneurysm formation",
          "E. Diffuse pancreatitis with gallstones"
        ],
        "answer": "D"
      },
      {
        "question_number": "12",
        "question": "A 59-year-old diabetic male with acute lymphoblastic leukemia is hospitalized for chemotherapy. Shortly after his therapy, he develops a fever and lethargy. He becomes hypotensive, tachycardic, and oliguric. Blood cultures are obtained, which grow gram-positive cocci within 24 h. His white blood cell count is 0.02 K/μL. He is transferred to the ICU for septic shock. He receives a large volume of crystalloid infusion for hypotension. He develops anasarca. The following morning, the patient complains of perineal and scrotal pain. On examination, he is noted to have mild induration of the perineum and scrotum, with minimal associated erythema; no crepitus or fluctuance is noted. Which of the following is the most important determinant of mortality in this patient?",
        "choices": [
          "A. Inadequate initial debridement",
          "B. Inadequate initial antibiotic therapy",
          "C. Inadequate initial fluid resuscitation",
          "D. Delayed intestinal diversion",
          "E. Delayed nutritional therapy"
        ],
        "answer": "A"
      },
      {
        "question_number": "13",
        "question": "A 68-year-old homeless, otherwise healthy-appearing woman with a history of prior abdominal surgeries is admitted to the hospital with a small bowel obstruction. She undergoes unsuccessful nonoperative management for 48 h, followed by laparotomy and lysis of adhesions. On induction of anesthe sia, she aspirates and develops rapidly progressive chemical pneumonitis. She is admitted to the ICU for respiratory failure and requires ventilator support. In the postoperative period:",
        "choices": [
          "A. Start parenteral nutrition immediately. Wait for bowel sounds and a bowel movement before starting enteral nutrition.",
          "B. Start parenteral nutrition immediately. Wait for a 6-h gastric residual volume of <400 mL before starting enteral nutrition.",
          "C. Continue crystalloid infusion. Wait for a 6-h gastric residual volume of <400 mL before starting enteral nutrition. Start parenteral nutrition after 5 days of bowel rest (which includes the 2 days preceding surgery).",
          "D. Wait for 24 h before starting enteral nutrition, regardless of the 6-h gastric residual volume.",
          "E. Wait for 48 h before starting enteral nutrition, regardless of the 6-h gastric residual volume."
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "The patient suffers from an ileus and does not tolerate tube feeding attempts. Parenteral nutrition is started at 25 kcal/kg per day. The following day, the patient suffers a witnessed seizure, and frequent premature ventricular contractions are noted on telemetry. The serum phosphate and magnesium levels are measured and noted to be low. Which of the following is true in patients with prolonged inanition (>7 days) due to postoperative ileus?",
        "choices": [
          "A. Patients with malnutrition or a history of substance abuse should start parenteral nutrition at 50 kcal/kg/day.",
          "B. Patients with malnutrition or a history of substance abuse should start parenteral nutrition at 30 kcal/kg/day.",
          "C. Patients with malnutrition or a history of substance abuse should start parenteral nutrition at 10 kcal/kg/day.",
          "D. Patients with malnutrition or a history of substance abuse should not receive parenteral nutrition.",
          "E. Patients with prolonged inanition should not receive parenteral nutrition."
        ],
        "answer": "C"
      },
      {
        "question_number": "15",
        "question": "Which of the following is NOT associated with infusion of normal saline for large-volume intravenous fluid resuscitation?",
        "choices": [
          "A. Renovascular constriction",
          "B. Hyperchloremic metabolic acidosis",
          "C. Lactic acidosis",
          "D. Anasarca",
          "E. Decrease in strong ion difference"
        ],
        "answer": "C"
      },
      {
        "question_number": "16",
        "question": "A 60-year-old healthy woman presents to the emergency room with right breast pain. She notes that her pet cat slept with her the night before, lying on her chest. She notes the acute onset of diffuse swelling, itching, and redness. Physical exam reveals the patient to be afebrile with a normal blood pressure and heart rate. There is diffuse right breast warmth and tenderness; the nipple appears slightly retracted. No masses or nipple discharge are encountered. The skin is intact. The left breast is normal in appearance and exam. What is the diagnostic test that will correctly diagnose this patient’s condition?",
        "choices": [
          "A. Ultrasound",
          "B. Magnetic resonance imaging (MRI)",
          "C. Mammogram",
          "D. Shave biopsy of the skin",
          "E. Full-thickness biopsy of the skin"
        ],
        "answer": "E"
      },
      {
        "question_number": "17",
        "question": "A 27-year-old woman presents to the emergency room with right upper quadrant abdominal pain. She is 35 weeks pregnant. Her BMI is 34. She notes that she has experienced nausea and vomiting daily during her pregnancy. She has a temperature of 100.1°F, blood pressure 110/70 mmHg, and heart rate 100 beats per min. An ultrasound is performed, but due to the large fetus, the gallbladder and appendix are not visualized. Which of the following is true about imaging this pregnant patient?",
        "choices": [
          "A. Both abdominal MRI and CT scan expose the fetus to a dose of ionizing radiation, which exceeds the maximum safe dose of ionizing radiation during pregnancy.",
          "B. Both abdominal MRI and CT scan expose the fetus to a dose of ionizing radiation, which is below the maximum safe dose of ionizing radiation during pregnancy.",
          "C. Neither abdominal MRI nor CT scan exposes the fetus to a dose of ionizing radiation.",
          "D. MRI exposes the fetus to ionizing radiation.",
          "E. CT scan exposes the fetus to ionizing radiation."
        ],
        "answer": "E"
      },
      {
        "question_number": "18",
        "question": "A 65-year-old obese man undergoes emergent coronary artery bypass grafting (CABG) on cardiopulmonary bypass. He requires large-volume resuscitation due to the long operative time. After surgery, he develops rhabdomyolysis, oliguria, and volume overload. On the morning after surgery, he undergoes endotracheal intubation and mechanical ventilation for respiratory failure due to volume overload. His abdomen becomes distended. An abdominal x-ray reveals a gas pattern consistent with ileus; there is mildly dilated small bowel with a paucity of gas in the colon. A nasogastric tube is placed for intestinal decompression, but his abdomen remains tender, distended, and firm. An ultrasound of the right upper quadrant reveals a normal gallbladder without stones and a normal common bile duct. He grimaces on examination and endorses pain by nodding his head. Bladder pressure is measured to be 22 mmHg. What is the appropriate next step?",
        "choices": [
          "A. Heavily sedate and paralyze the patient. Repeat bladder pressure.",
          "B. Heavily sedate the patient. Repeat the bladder pressure the following day.",
          "C. Perform a decompressive laparotomy with a temporary abdominal closure.",
          "D. Perform a decompressive laparoscopy to drain the ascites noted on ultrasound.",
          "E. Obtain a CT scan to rule out acute bowel ischemia."
        ],
        "answer": "A"
      },
      {
        "question_number": "19",
        "question": "An 85-year-old woman is admitted to the ICU with septic shock. She was previously healthy and did not take medica tions. She receives crystalloid resuscitation and broad spectrum antibiotic therapy. Her blood cultures grow gram-negative rods. Her lipase is mildly elevated. An ultrasound of the abdomen reveals a common bile duct of 9 mm; there is no wall thickening or pericholecystic fluid. Endoscopic retrograde cholangiopancreatography (ERCP) reveals pus on entry into the common bile duct. A sphincter otomy is performed, and the common bile duct is cleared of sludge and small stones. Following ERCP, her pancreatitis resolves, and within 48 h, she becomes pain free. What is the appropriate next step in this patient’s management?",
        "choices": [
          "A. Place a percutaneous cholecystostomy tube to prevent cholecystitis.",
          "B. Perform a cholecystectomy prior to discharge.",
          "C. Allow the patient to recover from sepsis, and delay cholecystectomy for 2 weeks.",
          "D. Allow the patient to recover from sepsis. No cholecys tectomy is warranted given the patient’s resolution of symptoms.",
          "E. Perform an HIDA scan; proceed to cholecystectomy if the gallbladder is not visualized."
        ],
        "answer": "B"
      },
      {
        "question_number": "20",
        "question": "A 60-year-old man is admitted to the hospital with painless bright red blood per rectum. He noted the onset 1 h prior to presentation. He is tachycardic and hypotensive. His examination is normal except for bright red blood and clots noted in the rectal vault. A nasogastric lavage reveals normal gastric fluid without blood. Rectal examination reveals gross blood in the rectal vault but no hemorrhoids or fissures. Colonoscopy reveals blood throughout the colon but no identifiable source. What should be the next step in management?",
        "choices": [
          "A. Tagged RBC scan",
          "B. Upper endoscopy",
          "C. CT scan",
          "D. Mesenteric angiography",
          "E. Total abdominal colectomy"
        ],
        "answer": "D"
      }
    ],
    "Chapter 10: Surgical Critical Care": [
      {
        "question_number": "1",
        "question": "A 76-year-old man with hypertension, chronic renal insuf ficiency, and Child class A cirrhosis is admitted to the intensive care unit (ICU) after emergency exploratory laparotomy for ruptured appendicitis. His vital signs are a temperature of 97.3°F, heart rate (HR) of 129 beats/min, blood pressure (BP) of 220/90 mmHg, respiratory rate (RR) of 30 breaths/min, and oxygen saturation (Sao2) of 90%. The patient is agitated and trying to pull his drains and nasogas tric tube. He does not appear to respond to commands. Select the best choice to sedate this patient.",
        "choices": [
          "A. Lorazepam, 5 mg intravenously (IV)",
          "B. Four-point restraints while trying to reason with the patient",
          "C. Morphine delivered by patient-controlled anesthesia (PCA) with settings of 1 mg every 6 min and a 30-mg 4-h lockout",
          "D. Diprivan and fentanyl drip",
          "E. Placement of an epidural catheter for analgesia"
        ],
        "answer": "D"
      },
      {
        "question_number": "2",
        "question": "A 53-year-old man with coronary artery disease, Child class B alcoholic cirrhosis, and chronic renal insufficiency is admitted to the ICU after undergoing exploratory laparotomy and resection of necrotic small bowel from an incarcerated ventral hernia. He is septic and continues to require mechanical ventilation. Arterial blood gas analysis revealed a pH of 7.59, Pco2 of 20 mmHg, Po2 of 59 mmHg, HCO3 of 21 mEq/L, base deficit of −2, and Sao2 of 88%. The nurse calls because the ventilator alarms continue to go off. The patient is actually breathing at a rate of 43 breaths/min. After adequately sedating him, he is still dyssynchronous with the ventilator. Which paralytic agent is the most appropriate for this patient?",
        "choices": [
          "A. Pancuronium",
          "B. Cisatracurium",
          "C. Vecuronium",
          "D. Succinylcholine",
          "E. Rocuronium"
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "Which of the following statements concerning radial artery cannulation is true?",
        "choices": [
          "A. Aortic systolic pressure is higher than radial systolic pressure.",
          "B. The Allen test is an outdated mode of assessing the collateral flow of the ulnar and radial arteries.",
          "C. The incidence of infection is higher with catheters placed by surgical cutdown.",
          "D. The catheter should be replaced every 3 days.",
          "E. Intermittent flushing to keep the catheter free of clots is desirable."
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "A 70-kg, 72-year-old man known to suffer from congestive heart failure (CHF), arthritis, diabetes mellitus, and a first-degree heart block is intubated in the ICU on postopera tive day 2 after exploratory laparotomy for perforated sigmoid diverticulitis. His urine output has dropped to 10 mL/h for the last shift, and he is hypotensive despite several fluid boluses. A PA catheter is placed through the right internal jugular vein with some difficulty. As the line is advanced to 50 cm, the patient has a 14-beat run of ventricu lar tachycardia, which resolves when the catheter is pulled back. It is finally advanced to 62 cm, and the balloon is inflated with 3 cc of air. As the line is being secured, a large amount of blood is noted in the endotracheal tube and the patient becomes hypotensive. Select the best intervention for this patient:",
        "choices": [
          "A. Place external pacing wires and administer lidocaine to treat the ventricular tachycardia.",
          "B. Place a double-lumen endotracheal tube and occlude the appropriate bronchus with a Fogarty catheter.",
          "C. Pull the PA catheter back 2 cm with the balloon inflated.",
          "D. Suction the endotracheal tube while deflating the balloon by 2 cc of air.",
          "E. Obtain a chest radiograph to confirm the correct place ment of the line."
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "A 51-year-old morbidly obese female who has a known history of symptomatic cholelithiasis is admitted to the ICU after presenting to the emergency department (ED) with severe epigastric pain. Her temperature is 100.5°F; HR, 115 beats/min; and BP, 123/84 mmHg. Her laboratory values are significant for a white blood cell (WBC) count of 15,000/ mm3 and a lipase of 1547. A computed tomography (CT) scan shows peripancreatic inflammation with a small fluid collection. What is the next best step in the management of this patient?",
        "choices": [
          "A. Central line placement for monitoring of central venous pressure (CVP)",
          "B. Broad-spectrum antibiotics",
          "C. Placement of an enteral feeding tube and initiation of tube feeding",
          "D. Percutaneous drain placement",
          "E. Cholecystectomy"
        ],
        "answer": "C"
      },
      {
        "question_number": "6",
        "question": "Of the following parameters, which is the best predictor of successful extubation?",
        "choices": [
          "A. Increase in Paco2 of less than 10 mmHg during a spontaneous breathing trial (SBT)",
          "B. Spontaneous tidal volume (Vt)",
          "C. 10-s head raise",
          "D. Rapid shallow breathing index (RSBI)",
          "E. Minute ventilation"
        ],
        "answer": "D"
      },
      {
        "question_number": "7",
        "question": "A 44-year-old male heroin user is intubated in the surgical intensive care unit (SICU) after undergoing debridement of a lower extremity wound. His vital signs are a temperature of 102.3°F, HR of 134 beats/min, and BP of 80/40 mmHg with a MAP of 55 mmHg. A triple lumen catheter is placed, and CVP reads 12 mmHg. Norepinephrine is started, and despite being at the upper limit of the recommended dose, the MAP increases to 62 mmHg. What is the next best step?",
        "choices": [
          "A. Fluid bolus",
          "B. Echocardiography",
          "C. Dobutamine",
          "D. Epinephrine",
          "E. Vasopressin"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Which of the following is an indication to give calcium gluconate in a patient with hyperkalemia?",
        "choices": [
          "A. Serum potassium of 6.2",
          "B. Electrocardiogram (ECG) changes consistent with hyperkalemia",
          "C. The patient does not have preexisting renal disease",
          "D. Both A and B",
          "E. All of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "You are asked to see a 24-year-old male with no medical problems who sustained a gunshot wound to the right thigh 1 h prior to arrival. He is afebrile with an HR of 136 beats/min and a BP of 90/60 mmHg. He is initially alert and asking for water but becomes confused during your brief interview. He is in which class of hemorrhagic shock?",
        "choices": [
          "A. I",
          "B. II",
          "C. III",
          "D. IV",
          "E. More information is needed"
        ],
        "answer": "C"
      },
      {
        "question_number": "10",
        "question": "A 33-year-old unhelmeted male is brought to the ED after a motorcycle crash. His temperature is 99.4°F, HR is 95 beats/ min, BP is 110/65 mmHg, and RR is 10 breaths/min with an Sao2 of 94% on room air. He makes incomprehensible sounds, withdraws extremities, and opens eyes to painful stimuli. He is intubated in the ED and placed on the ventilator for transfer to the ICU. On head CT, he is found to have small subarachnoid hemorrhage and a nondepressed skull fracture. The remainder of his trauma workup is negative. In addition to head-of-bed elevation and frequent monitoring of neuro logic status, which of the following is indicated?",
        "choices": [
          "A. IV mannitol bolus",
          "B. Hypertonic saline infusion",
          "C. Craniotomy",
          "D. Hypothermia",
          "E. Insertion of intracranial pressure (ICP) monitor at bedside"
        ],
        "answer": "E"
      },
      {
        "question_number": "11",
        "question": "When comparing early tracheostomy (<10 days after endotracheal intubation) versus late tracheostomy (>10 days after endotracheal intubation), which of the following is true?",
        "choices": [
          "A. Incidence of VAP is the same",
          "B. Decreased mortality in those undergoing early tracheos tomy at 28 days",
          "C. Shorter ICU length of stay",
          "D. No difference in sedation requirements",
          "E. Improved patient satisfaction"
        ],
        "answer": "C"
      },
      {
        "question_number": "12",
        "question": "A 53-year-old woman with a history of metastatic lung cancer is admitted to the ICU following video-assisted resection of the right middle lobe. Initial vitals are an HR of 104 beats/min, BP of 64/43 mmHg, and RR of 34 breaths/min. After multiple fluid boluses, the patient remains hypotensive, so a PA catheter is placed and secured at 43 cm. The following values were determined: PA pressure, 38/27 mmHg; CVP, 26 mmHg; PA occlusion pressure (PAOP), 27 mmHg; and cardiac index, 2.0 L/min/m2. Which of the following explains the clinical scenario?",
        "choices": [
          "A. CHF from sepsis",
          "B. Malignant pleural effusion",
          "C. Cardiac tamponade",
          "D. Hypovolemia",
          "E. Pneumothorax"
        ],
        "answer": "C"
      },
      {
        "question_number": "13",
        "question": "Which of the following treatments of a hypotensive patient is correct?",
        "choices": [
          "A. Pericardiocentesis in a 54-year-old man after myocardial infarction (MI) with adequate volume status and hypotension refractory to inotropic agents",
          "B. Cardiac pacing in a 73-year-old woman taking digitalis with atrial fibrillation on the ECG, a ventricular response rate of 40, and an adequate volume status",
          "C. Intraaortic balloon pump (IABP) in a 47-year-old woman with sepsis from pyelonephritis, good volume, and an echocardiogram showing no mechanical defects",
          "D. Inotropic agents in a 68-year-old woman with metastatic breast cancer, distended neck veins, and PA catheter readings showing normalization of right and left heart pressure",
          "E. Clamping of the infrarenal aorta in a patient with a gunshot wound to the chest and low right and left atrial pressure"
        ],
        "answer": "B"
      },
      {
        "question_number": "14",
        "question": "The alarm on the cardiac monitor continues to go off on a 73-year-old man with CHF and diabetes mellitus who was recently transferred to the ICU. He appears calm and is sitting up in bed watching a baseball game. His vital signs are an HR of 155 beats/min, BP of 125/84 mmHg, RR of 18 breaths/min, and Sao2 of 96%. An ECG taken 7 days ago is normal. The most recent one, taken 24 h previously, shows that his previously distinct P waves have been replaced with rapid, polymorphic, irregular P waves that are irregular and occurring at a rate greater than 300/min. The ECG is repeated and confirms the presence of an arrhythmia. At this point, which is the best initial intervention for this patient?",
        "choices": [
          "A. Anticoagulation with a heparin drip",
          "B. Cardioversion with paddles and settings at 260 J up to three times",
          "C. Repeat ECG in 48 h",
          "D. Restoration of sinus rhythm by pharmacologic means such as amiodarone or diltiazem",
          "E. Morphine, 4 mg by IV push, to alleviate the pain"
        ],
        "answer": "D"
      },
      {
        "question_number": "15",
        "question": "A 58-year-old woman is found to have meningococcemia and sepsis. On examination, she is confused, agitated, and in respiratory distress. She is intubated and placed on assist control (AC) ventilation. A central line is placed and several fluid boluses are given but she is still hemodynamically unstable. A continuous drip of a vasoactive drug is started. After administration, her HR remains at 105 beats/min, MAP rises to 70 from 45 mmHg, cardiac output (CO) drops to 2.8 from 3.3 L/min, and systemic vascular resistance increases to 1150 from 500 dynes⋅s/cm5. Based on the changes observed, which drug was most likely administered?",
        "choices": [
          "A. Dobutamine",
          "B. Dopamine",
          "C. Phenylephrine",
          "D. Epinephrine",
          "E. Milrinone"
        ],
        "answer": "C"
      },
      {
        "question_number": "16",
        "question": "You are consulted for a long-term enteral feeding access in a patient with a recent stroke. Despite speech therapy, he is unable to maintain adequate nutrition with by-mouth (PO) intake alone. Which of the following is an absolute contraindication to percutaneous endoscopic gastrostomy (PEG) placement?",
        "choices": [
          "A. Active infection",
          "B. Hepatitis with large ascites",
          "C. History of abdominal surgery",
          "D. Peptic ulcer disease",
          "E. Expected survival of less than 6 months"
        ],
        "answer": "B"
      },
      {
        "question_number": "17",
        "question": "Which of the following conditions is not usually associated with elevated dead space ventilation?",
        "choices": [
          "A. 42-year-old female after MI with CHF and a CO of 1.5 L/min",
          "B. 28-year-old woman on post partum [?] day 1 with shortness of breath, a Pao2 of 60 mmHg, and segmental clots bilaterally in the pulmonary arteries",
          "C. 52-year-old Hispanic immigrant with a long-standing ventricular septal defect and PA pressure of 80/52 mmHg",
          "D. 22-year-old man after multiple gunshot wounds, massive transfusions, and a mean arterial to inspired oxygen ratio (Pao2/FiO2) of 180",
          "E. 62-year-old woman smoker with the following ventilator settings: controlled mandatory ventilation at a rate of 12 breaths/min, FiO2 of 60%, Vt of 600 mL, and positive end-expiratory pressure (PEEP) of 5 cm H2O"
        ],
        "answer": "E"
      },
      {
        "question_number": "18",
        "question": "A 17-year-old female with asthma is brought to the OR for ruptured ectopic pregnancy. Postoperatively, she is dyspneic and in acute respiratory failure. She is intubated and transferred to the surgical ICU where her ventilator is set to AC mode, RR of 18 breaths/min, FiO2 of 0.80, Vt of 600 mL, and PEEP of 0 mmHg. She was sedated and paralyzed for the intubation and is not breathing over the ventilator settings. After examining the patient and the flow pattern on the ventilator, changes in the settings are made. A change in which ventilator setting would best limit the intrinsic PEEP?",
        "choices": [
          "A. Increase in Vt",
          "B. Decrease in the inspiratory flow rate",
          "C. Increase in PEEP",
          "D. Decrease in RR",
          "E. Change from AC mode to synchronized intermittent mandatory ventilation (SIMV)"
        ],
        "answer": "D"
      },
      {
        "question_number": "19",
        "question": "A 65-year-old male who is 7 days out from a three-vessel coronary artery bypass remains intubated for respiratory failure despite normal hemodynamics. He is sedated with propofol and failed an SBT earlier this morning. The nurse asks if you would like to hold his sedation. Which of the following is true with regard to daily sedation awakening trials (SATs)?",
        "choices": [
          "A. The risk of self-extubation is too high to justify SAT after failed SBT.",
          "B. SAT performed daily decreases overall sedation requirements for ventilated patients.",
          "C. SAT alone is associated with lower rates of delirium.",
          "D. Daily paired SAT and SBT are associated with fewer ventilator days and decreased ICU length of stay.",
          "E. When part of an ICU protocol, daily SAT is associated with decreased overall mortality."
        ],
        "answer": "D"
      },
      {
        "question_number": "20",
        "question": "With regard to ventilatory mechanics, which of the following statements is true?",
        "choices": [
          "A. The work of breathing at rest consumes 10% of total body oxygen consumption (Vo2).",
          "B. COPD is associated with an increase in the work of breathing as a result of increased expiratory work.",
          "C. The work of breathing may increase to 75% of the total-body Vo2 in postoperative patients.",
          "D. Airway pressure reflects the compliance of only the lungs.",
          "E. Compliance is measured as the change in pressure divided by the change in volume."
        ],
        "answer": "B"
      },
      {
        "question_number": "21",
        "question": "A 53-year-old man with chronic kidney disease, severe COPD, and systolic heart failure after MI is in your ICU. He is unable to tolerate the Trendelenburg position during the placement of a central line in the right internal jugular vein. Immediately after placement, he becomes diaphoretic and complains of difficulty in breathing. He then becomes obtunded, tachycardic, and progressively tachypneic. His BP is 80/50 mmHg, and he has bilateral breath sounds by auscultation. Which of the following should be performed immediately?",
        "choices": [
          "A. Left lateral decubitus and Trendelenburg position, then aspiration from the central line",
          "B. Heparinization",
          "C. Removal of the central line",
          "D. Fluid bolus",
          "E. Dobutamine"
        ],
        "answer": "A"
      },
      {
        "question_number": "22",
        "question": "A family meeting is called for a 69-year-old man who was intubated 6 days earlier for pneumonia and respiratory distress. He is now awake, alert, and asking for removal of the tube. His family wants to know when and whether he will be extubated. Which of the following characteristics of this patient meets conventional weaning criteria?",
        "choices": [
          "A. Negative inspiratory force of −10 cm H2O",
          "B. A respiratory frequency/tidal volume (RF/Vt) ratio of 105 or less",
          "C. Correction of underlying pulmonary and nonpulmonary complications",
          "D. Pulse oximetry reading of 92%",
          "E. Vital capacity of 12 to 15 mL/kg and peak inspiratory pressure of less than 25 cm H2O"
        ],
        "answer": "A"
      },
      {
        "question_number": "23",
        "question": "A 29-year-old firefighter is intubated in the ICU after being exposed to smoke. She has thick yellow secretions that require frequent suctioning along with the administration of bronchodilators. On hospital day 5, she has a percutaneous central venous catheter placed through the right internal jugular vein. Several hours later, she undergoes respiratory arrest. Her peak inspiratory pressure has risen from 24 to 41 cm H2O, and her plateau pressure has stayed at 16 cm H2O. Choose which of the following is the most likely reason for the respiratory arrest:",
        "choices": [
          "A. Tension pneumothorax",
          "B. Flash pulmonary edema",
          "C. Pulmonary embolism (PE)",
          "D. Endotracheal tube obstruction",
          "E. Auto-PEEP with breath stacking"
        ],
        "answer": "D"
      },
      {
        "question_number": "24",
        "question": "A 73-year-old woman weighing 60 kg is admitted to the hospital with acute pancreatitis. She is aggressively resusci tated with fluid but becomes hypotensive and has increasing work of breathing and O2 requirements within the next 12 h. The patient is transferred to the ICU and intubated. A PA catheter is placed, and the wedge pressure is 8 cm H2O. Arterial blood gas analysis shows values of a pH of 7.36, a Pao2 of 62, a Pco2 of 42, a serum bicarbonate of 21, and a base deficit of −2 with Sao2 of 90%. Which of the following ventilation strategies is most appropriate for this patient?",
        "choices": [
          "A. Pressure-control ventilation (PCV) with a pressure of 40 cm H2O and an inverse ratio ventilation of 3:1",
          "B. SIMV with a Vt of 720 mL and an RR set to keep the pH at 7.4",
          "C. AC ventilation with a Vt of 600 mL and an FiO2 of 100%",
          "D. AC ventilation with a Vt of 360 mL and an RR to keep the pH above 7.2",
          "E. SIMV with a Vt of 600 and an FiO2 of 100%"
        ],
        "answer": "D"
      },
      {
        "question_number": "25",
        "question": "Which one of the following criteria is included in the definition of ARDS?",
        "choices": [
          "A. Onset within 1 week of a clinical insult",
          "B. Chest radiograph showing pulmonary infiltrate (unilateral or bilateral)",
          "C. Hypoxemia with Pao2 to FiO2 ratio < 200 mmHg",
          "D. Normal PA wedge pressure",
          "E. Infectious origin"
        ],
        "answer": "A"
      },
      {
        "question_number": "26",
        "question": "A 59-year-old woman with a long-standing history of gastroesophageal reflux disease (GERD) underwent a Nissen fundoplication that was complicated by 2 L of blood loss and hypotension in the OR. Her vital signs are an HR of 103 beats/min, a BP of 100/70 mmHg, an RR of 16 breaths/min, and an Sao2 of 96%. Her urine output was 15 mL of urine/h over the last 4 h. Laboratory results include a urine osmolal ity of 600 mOsm/kg, urine sodium concentration of 15 mEq/L, plasma sodium concentration of 140 mEq/L, urine creatinine concentration of 20 mg/dL, and plasma creatinine concentration of 1.5 mg/dL. What is the next step in management?",
        "choices": [
          "A. Flushing the Foley catheter with 60 mL of normal saline",
          "B. Hemodialysis",
          "C. Nephrology consultation",
          "D. Decompressive laparotomy for abdominal compartment syndrome (ACS)",
          "E. Administration of a 1000-mL fluid bolus of normal saline as a fluid challenge"
        ],
        "answer": "E"
      },
      {
        "question_number": "27",
        "question": "A 46-year-old brittle diabetic and hypertensive woman is brought to the ICU after being found unresponsive in her bed. After undergoing a CT scan of her head, abdomen, and pelvis with IV contrast media, she is transferred to the ICU. The ICU team places a central line, orders an echocardio gram, and places a bladder catheter. Her urine output has been approximately 10 mL/h for the last 4 h. Her FENa is calculated to be 2.4%. Which of the following is not consistent with acute tubular necrosis (ATN)?",
        "choices": [
          "A. Oliguria",
          "B. FENa greater than 2%",
          "C. Urine osmolality of 200 mOsm/kg",
          "D. Creatinine clearance greater than 125 mL/min",
          "E. Sodium wasting"
        ],
        "answer": "D"
      },
      {
        "question_number": "28",
        "question": "A 62-year-old man with peripheral vascular disease, diabetes, and bilateral tissue loss in the lower extremities is admitted for angiography of his lower extremities. He has chronic renal failure and his serum creatinine level is 5.0 mg/dL, which has been his baseline for the last 3 years. Which of the following agents is indicated to reduce the risk for IV contrast– induced nephropathy?",
        "choices": [
          "A. Calcium channel blocker",
          "B. Aggressive diuresis",
          "C. Saline volume expansion before and after the procedure",
          "D. Acetylcysteine given only after exposure to contrast material",
          "E. Mannitol and saline hydration"
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "Choose the situation that does not require immediate renal replacement therapy.",
        "choices": [
          "A. A 27-year-old bipolar patient, after running a half marathon, taking a prescribed lithium dose and found to have ataxia, confusion, and inverted T waves",
          "B. A 68-year-old man after sigmoid colectomy with new-onset seizures and blood urea nitrogen (BUN) of 150 mg/dL",
          "C. A 58-year-old man after a motor vehicle collision with multiple long-bone fractures, BUN of 120 mg/dL, creatinine of 2.8 mg/dL, and diffuse bleeding",
          "D. A 71-year-old woman with diabetes maintained on an insulin drip after total abdominal hysterectomy and bilateral salpingo-oophorectomy with an FENa of 0.7% and urine output less than 20 mL/h for last 7 h",
          "E. A 45-year-old man with respiratory distress after massive resuscitation for a septic episode, bilateral lung haziness on chest radiography, and coarse crackles who is unresponsive to diuretics"
        ],
        "answer": "D"
      },
      {
        "question_number": "30",
        "question": "A 68-year-old woman with a history of GERD, cholelithiasis, and coronary artery disease is seen in the ED with nausea, vomiting, and epigastric pain. Laboratory tests showed amylase and lipase values of 259 and 1782 units/L, leukocy tosis of 18,300/mm3, and a prothrombin time (PT) and international normalized ratio (INR) of 47 s and 1.9, respectively. The patient received 6 L of crystalloid solution because of hypotension and required intubation. After 48 h, the hemoglobin has dropped by 2 g. What are the factors that have the strongest correlation with stress-related bleeding in critically ill patients?",
        "choices": [
          "A. Mechanical ventilation and hypotension",
          "B. Coagulopathy and renal failure",
          "C. Steroids and sepsis",
          "D. Mechanical ventilation and steroids",
          "E. Mechanical ventilation and coagulopathy"
        ],
        "answer": "E"
      },
      {
        "question_number": "31",
        "question": "A 55-year-old male who is in the ICU 5 days after multiple blunt traumatic injuries. He was intubated in the OR for the repair of a femur fracture on hospital day 1 and has not yet been extubated. He continues to fail his SBT with RSBI higher than 105. What is the most effective strategy to liberate this patient from the ventilator?",
        "choices": [
          "A. PS wean",
          "B. AC ventilation with daily SBT",
          "C. SIMV wean",
          "D. Early tracheostomy before day 10",
          "E. PCV with daily SBT"
        ],
        "answer": "A"
      },
      {
        "question_number": "32",
        "question": "A 37-year-old woman comes to the ED complaining of a severe headache. She undergoes an emergency head CT scan, which shows subarachnoid hemorrhage; an angiogram identifies an arteriovenous malformation, which is subse quently embolized. Four days later, her serum sodium concentration is 122 mEq/L. Which is the most correct statement regarding the syndrome of inappropriate secretion of antidiuretic hormone (SIADH) and cerebral salt wasting (CSW)?",
        "choices": [
          "A. SIADH and CSW share the same underlying pathophysi ology and cannot be reliably distinguished.",
          "B. SIADH and CSW can be differentiated by measuring urine sodium and serum uric acid concentrations.",
          "C. SIADH and CSW can be differentiated by measuring urine osmolality and sodium concentration.",
          "D. Assessment of extracellular fluid volume will best differentiate between SIADH and CSW.",
          "E. Regardless of the diagnosis, treatment of the hyponatre mia is the same."
        ],
        "answer": "D"
      },
      {
        "question_number": "33",
        "question": "A patient is admitted to the surgical ICU after a prolonged laparoscopic cholecystectomy, which required conversion to an open procedure. The patient was reintubated for respira tory distress in the recovery area. Upon arrival to the unit, you obtain an arterial blood gas: pH 7.46, Paco2 23, and Pao2 85. Which of the following is true?",
        "choices": [
          "A. The primary problem is metabolic with respiratory compensation.",
          "B. No changes should be made to the ventilation as the kidneys will compensate for this abnormality.",
          "C. This acid-base disturbance is consistent with septic shock.",
          "D. Minute ventilation should be decreased.",
          "E. PEEP should be increased."
        ],
        "answer": "D"
      },
      {
        "question_number": "34",
        "question": "An 80-kg, 65-year-old woman with severe lupus is admitted to the ICU after exploratory laparotomy for sigmoid diverticulitis (Hinchey type IV). She is intubated and maintained on AC ventilation, is tachycardic, and is febrile to 101°F. The nurse has noticed an increase in tracheobronchial secretions that are purulent in character. His BP drops to 88/50 mmHg, and Sao2 of 96%. Lab results show a WBC of 18,500/mm3, sodium of 140 mEq/L, and potassium of 4.3 mEq/L, and a normal liver profile. What is the next best step?",
        "choices": [
          "A. Additional 2 L of a normal saline bolus",
          "B. Hydrocortisone, 100 mg IV",
          "C. Administration of furosemide for low urine output",
          "D. Initiation of vasopressor therapy with norepinephrine or dopamine",
          "E. Aggressive rewarming"
        ],
        "answer": "D"
      },
      {
        "question_number": "35",
        "question": "Norepinephrine therapy is started in the patient in Question 34. Later, vasopressin, 0.03 units/min, is added, but the patient remains hypotensive with a MAP below 55 mmHg. Her hemoglobin concentration is 9.0 g/dL. After performing an echocardiogram, dobutamine infusion was started at a maximum of 20 mcg/kg/min; pH is 7.21 with a Pco2 of 34 mmHg. The patient remains hypotensive. What is the next step?",
        "choices": [
          "A. Increase the cardiac index to predetermined supranormal levels.",
          "B. Administer hydrocortisone, 100 mg IV.",
          "C. Have a family discussion about withdrawing care.",
          "D. Perform an adrenocorticotropic hormone (ACTH) stimulation test.",
          "E. Switch the ventilatory mode to AC."
        ],
        "answer": "B"
      },
      {
        "question_number": "36",
        "question": "A 70-kg, 33-year-old woman who had not seen a physician in 10 years arrives at the ED with symptoms of dyspnea, fatigue, weight gain, diplopia, and dysphagia following an urgent laparoscopic cholecystectomy 10 days ago. On examination, she is awake and alert. She is afebrile with an HR of 80 beats/min, BP of 120/70 mmHg, and RR of 29 breaths/min. Her heart sounds are normal and breaths are bilateral and shallow. She has ptosis and significant proximal muscle weakness in all extremities. She is drooling slightly and having difficulty swallowing. Her vital capacity is 500 mL and her laboratory tests are pending. Which of the following treatments is the most appropriate to initiate next?",
        "choices": [
          "A. Administration of pyridostigmine",
          "B. Endotracheal intubation",
          "C. Administration of steroids",
          "D. Administration of IV immunoglobulin",
          "E. Administration of levothyroxine"
        ],
        "answer": "B"
      },
      {
        "question_number": "37",
        "question": "A 73-year-old male with stage IV colon cancer is intubated in the ICU 5 days after undergoing palliative resection of his primary tumor. He becomes acutely febrile and tachycardic with increased oxygen requirement. His BP drops to 88/50 mmHg. A bedside echocardiogram demonstrates a hyperdy namic left ventricle and right ventricular strain. Which of the following is the optimal treatment for this patient?",
        "choices": [
          "A. Surgical embolectomy",
          "B. Systemic tissue plasminogen activator (tPA)",
          "C. Catheter-directed tPA",
          "D. Initiation of therapeutic heparin drip",
          "E. Placement of inferior vena cava (IVC) filter"
        ],
        "answer": "C"
      },
      {
        "question_number": "38",
        "question": "Which of the following sites for central venous catheter placement is associated with the lowest rate of catheter-asso ciated blood stream infections?",
        "choices": [
          "A. Internal jugular vein",
          "B. Subclavian vein",
          "C. Femoral vein",
          "D. Both A and B are equivalent",
          "E. All sites are equivalent if sterile technique is maintained"
        ],
        "answer": "B"
      },
      {
        "question_number": "39",
        "question": "You are attempting to place a central venous catheter in the right internal jugular vein of a hemodialysis patient who is in the ICU after below-knee amputation for a severe diabetic foot infection. Which of the following is true regarding the central line placement?",
        "choices": [
          "A. The widespread use of ultrasound has been shown to reduce complication rates regardless of the site.",
          "B. The risk of complication increases after three attempts by the same proceduralist.",
          "C. If ultrasound is used, a chest radiograph is unnecessary prior to attempts on the contralateral side.",
          "D. Routine exchange of catheters reduces infectious complications.",
          "E. Aspiration of dark blood confirms appropriate venous placement."
        ],
        "answer": "B"
      },
      {
        "question_number": "40",
        "question": "A 66-year-old woman who has been in the ICU for 2 weeks following total hip replacement complicated by massive infection and sepsis is complaining of right calf pain. She gets out of bed to go to physical therapy and develops severe dyspnea, tachycardia, and hypotension. Pulse oximetry reading is 75%. A CT angiogram shows bilateral clots in the pulmonary arteries. With regard to PE, which of the following is true?",
        "choices": [
          "A. Early chest radiographic abnormalities are rarely present in patients with PE.",
          "B. A shunt abnormality is present early after the PE and a V/Q abnormality becomes the mechanism for hypoxemia in later stages.",
          "C. Thrombolytic therapy has been shown to reduce mortality rates in comparison to heparin in patients with PE.",
          "D. Heparin should never be given until the diagnosis of PE is absolute.",
          "E. More than 33% of patients with PE have negative lower extremity duplex studies for deep vein thrombosis (DVT)."
        ],
        "answer": "E"
      },
      {
        "question_number": "41",
        "question": "A 25-year-old male patient with Von Hippel–Lindau (VHL) syndrome is found to have bilateral adrenal masses identified on a CT of the abdomen. His medication list includes both an angiotensin-converting enzyme (ACE) inhibitor and calcium channel blocker for hypertension. As part of his preoperative preparation, what medication(s) should he receive?",
        "choices": [
          "A. β-blockade",
          "B. α-blockade",
          "C. α-blockade followed by β-blockade",
          "D. β-blockade followed by α-blockade",
          "E. Hydrocortisone"
        ],
        "answer": "C"
      },
      {
        "question_number": "42",
        "question": "A 56-year-old male with hypertension and diabetes is anticoagulated following an emergent right femoral-popliteal arterial bypass. He has been continually oozing from his fasciotomy sites, and his hemoglobin has drifted down in the past 3 days to a level of 7.8 g/dL. On review of his chart you see that in the preoperative clearance note from cardiology he had a hemoglobin level of 13.0 g/dL and no significant cardiac disease. His family is concerned about how pale he has been during this ICU stay. His vital signs are an HR of 86 beats/min, BP of 128/69 mmHg, and Sao2 of 96%. What is the appropriate answer regarding a blood transfusion for this patient at this time?",
        "choices": [
          "A. Transfuse five units of PRBCs to reach the preoperative hemoglobin level of 13 g/dL.",
          "B. Check complete blood count (CBC) levels daily and hold transfusion until the hemoglobin level is lower than 9 g/dL.",
          "C. Start erythropoietin at 40,000 units daily.",
          "D. Transfuse PRBCs to a level greater than 10 g/dL.",
          "E. Check daily CBC levels and hold transfusion until the hemoglobin level is lower than 7 g/dL."
        ],
        "answer": "E"
      },
      {
        "question_number": "43",
        "question": "The routine use of which of the following is associated with a lower rate of VAP in the ICU setting?",
        "choices": [
          "A. Ventilator weaning protocol",
          "B. Chlorhexidine oral rinse",
          "C. Daily sedation vacation",
          "D. H2 blocker",
          "E. Maintaining the head of bed at 30 to 45 degrees"
        ],
        "answer": "A"
      },
      {
        "question_number": "44",
        "question": "A 47-year-old man with hepatitis C cirrhosis and hepatocellu lar carcinoma is in the ICU following orthotopic liver transplant. Preoperatively, he developed renal failure secondary to hepatorenal syndrome and remains on dialysis but otherwise is recovering well. On postoperative day 5, his platelet count is noted to be 70,000 per microliter from 150,000 per microliter one day prior. What is the most likely diagnosis?",
        "choices": [
          "A. Consumptive coagulopathy",
          "B. Laboratory error",
          "C. Hemodilution",
          "D. Heparin-induced thrombocytopenia",
          "E. Idiopathic thrombocytopenic purpura (ITP)"
        ],
        "answer": "D"
      },
      {
        "question_number": "45",
        "question": "For the patient in Question 44, the diagnosis of heparin induced thrombocytopenia (HIT) is confirmed. What is the next best step?",
        "choices": [
          "A. Argatroban drip",
          "B. Oral anticoagulation with Coumadin",
          "C. Hold all anticoagulation",
          "D. Lepirudin",
          "E. Transition from heparin to Lovenox"
        ],
        "answer": "A"
      },
      {
        "question_number": "46",
        "question": "A 60-year-old man with renal failure who has been undergoing dialysis for the past 2 years is admitted for cellulitis surrounding the fistula site on his right upper extremity. Antibiotics are started, and the patient is observed. On hospital day 4, his fistula clots and he is taken to the OR for revision. On the following day, he is febrile, coughing up thick green sputum, and dyspneic despite having undergone dialysis that morning. A chest radiograph shows an infiltrate in his right lower lobe, and laboratory tests show a WBC count of 18,000/mm3. Which characteristic of nosocomial pneumonia listed below is not correct?",
        "choices": [
          "A. Characterized by onset within 24 h of hospital admission",
          "B. Purulent sputum",
          "C. Isolation of the pathogenic organism from blood or the lung",
          "D. Elevated WBC count",
          "E. Infiltrate on chest radiography"
        ],
        "answer": "A"
      },
      {
        "question_number": "47",
        "question": "A 27-year-old patient presented with a prolonged ICU course for Fournier’s gangrene. Upon admission 5 days ago he had arterial and central lines placed along with a Foley catheter, which has since been removed. He now complains of diffuse body ache, anorexia, and cough with thin, white sputum. He has not had flatus or a bowel movement for 24 h. Chest radiography shows bilateral haziness at the costophrenic angles. Physical examination shows no acute distress, crackles in the lung bases bilaterally, and a swollen right arm. He has some redness around the right side of his neck and chest while his abdomen is soft, distended, and tympanitic but nontender. Vital signs include a temperature of 101.6°F, HR of 100 beats/ min, BP of 128/75 mmHg, and Sao2 of 96%. Lab findings include WBC of 18,500/mm3, sodium concentration of 140 mEq/L, potassium of 4.3 mEq/L, BUN of 21 mg/dL, creatinine level of 0.8 mg/dL, and liver profile within normal limits. What is the most likely diagnosis?",
        "choices": [
          "A. Acalculous cholecystitis",
          "B. HAP",
          "C. Catheter-related bloodstream infection",
          "D. Perforated peptic ulcer",
          "E. Viral respiratory infection"
        ],
        "answer": "C"
      },
      {
        "question_number": "48",
        "question": "A 45-year-old male is recovering from multiorgan failure after laparotomy for a perforated gastric ulcer. He has been afebrile for 48 h and is not taking any antibiotics. His WBC count is normal and renal failure has resolved. Encephalopathy is improving, and oxygenation is ade quate, although attempts to wean him from the ventilator have been unsuccessful. Neurologic examination shows symmetrical quadriparesis with sparing of the face and depressed deep tendon reflexes. Spinal tap is normal. Which of the following statements is true concerning his condition?",
        "choices": [
          "A. Nerve biopsy often shows demyelination or inflammation.",
          "B. Failure to wean from the ventilator is due to phrenic nerve involvement.",
          "C. Corticosteroids are the treatment of choice.",
          "D. Serum antibodies against acetylcholine receptors are always present.",
          "E. Plasmapheresis is the initial treatment of choice."
        ],
        "answer": "B"
      },
      {
        "question_number": "49",
        "question": "A 63-year-old man is admitted to the ICU following a Hartmann procedure for Hinchey type IV diverticulitis 5 days earlier. The patient is intubated and maintained on AC ventilation, is tachycardic, and is febrile to 101°F. The nurse has noticed an increase in tracheobronchial secretions that are purulent in character. A chest radiograph shows a new infiltrate in his right lung. Which of the following statements is false regarding this patient’s condition?",
        "choices": [
          "A. The most likely organism involved is methicillin-sensitive S. aureus.",
          "B. The frequency of ventilator circuit changes does not influence the incidence of this complication.",
          "C. Kinetic beds and elevation of the head of the patient to 45 degrees decrease its incidence.",
          "D. The risk for development of this complication is highest in the second week.",
          "E. Qualitative cultures or secretions are preferred over quantitative culture techniques."
        ],
        "answer": "D"
      },
      {
        "question_number": "50",
        "question": "A 22-year-old man involved in a motor vehicle accident is found to have a thoracic spine fracture (T6) and paraplegia. The patient is hypotensive with a systolic BP of 70 mmHg, is bradycardic with a pulse of 48 beats/min, and is breathing comfortably. Which of the following would be the most appropriate initial treatment?",
        "choices": [
          "A. Isotonic fluid administration",
          "B. Steroid administration within 24 h of the injury",
          "C. Immediate intubation",
          "D. α-Agonist administration",
          "E. Immediate magnetic resonance imaging"
        ],
        "answer": "A"
      },
      {
        "question_number": "51",
        "question": "Which of the following is associated with the greatest in-hospital mortality?",
        "choices": [
          "A. An ICU patient with an increase in the Sequential Organ Failure Assessment (SOFA) score by 2 points in 24 h",
          "B. A patient in the ED with altered mental status and an RR of 25 breaths/min but no hypotension",
          "C. An ICU patient requiring one vasopressor with a serum lactate value of 2 mmol/L",
          "D. A patient on the medical ward who is alert and oriented but hypotensive and tachypneic",
          "E. All represent sepsis with equal in-hospital mortality"
        ],
        "answer": "C"
      },
      {
        "question_number": "52",
        "question": "A 28-year-old male with a history of depression is brought into the ED by a family member who believes the patient is overdosed on acetaminophen. On further questioning the patient admits to ingesting “a few handfuls” of acetamino phen tablets approximately 18 h prior to the arrival to the hospital. On assessment, the patient is awake; however, he is confused. His vital signs are an HR of 105 beats/min, BP 102/77 mmHg, RR 18 breaths/min, and Sao2 of 99%. Lab values are significant for arterial pH 7.32, INR 3.1, and creatinine 4.2. What is the best first step for management of this patient?",
        "choices": [
          "A. Administration of IV N-acetylcysteine",
          "B. Stress-dose steroids",
          "C. Aggressive fluid resuscitation with normal saline",
          "D. Activated charcoal",
          "E. Urgent evaluation for liver transplantation"
        ],
        "answer": "A"
      },
      {
        "question_number": "53",
        "question": "A 30-year-old female with a history of nonalcoholic steatohepatitis underwent a spontaneous vaginal delivery complicated by uterine atony and a large-volume bleeding, refractory to fundal massage, medical management, and uterine artery embolization. Hemostasis eventually is achieved after the patient underwent exploratory laparotomy and hysterectomy; however, the patient required rapid transfusion of 15 units of PRBCs during her resuscitation. Postoperatively, the patient is extubated and transferred to the surgical ICU for monitoring. Shortly after arrival, the patient complains of perioral numbness and paresthesias in her feet. What is the most likely cause of the patient’s symptoms?",
        "choices": [
          "A. Metabolic alkalosis due to alkaline transfusions",
          "B. Overadministration of IV crystalloids",
          "C. Low serum calcium levels in the transfused blood",
          "D. Citrate toxicity",
          "E. Hyperkalemia due to hemolysis of transfused blood"
        ],
        "answer": "D"
      },
      {
        "question_number": "54",
        "question": "A 67-year-old-male is brought emergently to the OR for the management of freely perforated diverticulitis. During the procedure the patient is unstable, requiring multiple vasopressors as well as large-volume fluid resuscitation. At the completion of the case, the patient was stabilized and transferred to the SICU intubated with nasogastric decom pression. The patient is noted to have worsening abdominal distension throughout the night and decreasing urine output despite multiple crystalloid boluses. On examination, the patient has a Richmond Agitation-Sedation Scale score of −1. He has a tense abdomen with a healthy appearing ostomy and an abdominal surgical drain with minimal serosanguinous drainage. His vital signs are a temperature of 37.2°C, HR 98 beats/min, and BP 144/92 mmHg. He is mechanically ventilated, with peak airway pressures of 38 cm H2O and plateau pressures of 28 cm H20. Intravesicular pressure is measured to be 22 mmHg. What is the next best step in managing this patient?",
        "choices": [
          "A. Increase the patient’s sedation",
          "B. Decrease the patient’s Vt",
          "C. Administration of a paralytic agent",
          "D. Broadening of antibiotic therapy",
          "E. Emergent return to the OR for reexploration"
        ],
        "answer": "A"
      }
    ],
    "Chapter 11: Trauma": [
      {
        "question_number": "1",
        "question": "The primary survey is best described by which sequence of steps?",
        "choices": [
          "A. Airway, Blood pressure, Pulses, Breath sounds, Extremities",
          "B. Airway, Breathing, Circulation, Disrobe, Extremities",
          "C. Airway, Breathing, Circulation, Disability, Exposure",
          "D. Access, Blood pressure, Chest compressions, Disability, Endotracheal intubation",
          "E. Airway intubation, Bilateral chest tube placement, Central line placement"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "A middle-aged male is found lying on the ground in an alley and is brought into the trauma bay for additional evaluation. His vital signs are stable. The only sign of trauma is a large scalp laceration. The patient is confused with a Glasgow Coma Scale (GCS) score of 7. The decision is made to intubate the patient. What is the correct order for rapid sequence intubation in trauma?",
        "choices": [
          "A. In-line cervical immobilization, preoxygenation, cricoid pressure, induction, paralysis, intubate, confirm placement with CO2 detector",
          "B. In-line cervical immobilization, preoxygenation, cricoid pressure, paralysis, induction, intubate, confirm placement with CO2 detector",
          "C. In-line cervical immobilization, preoxygenation, cricoid pressure, induction, intubate, confirm placement with CO2 detector, paralysis",
          "D. Tilt head back in sniffing position, preoxygenation, cricoid pressure, induction, paralysis, intubate, confirm placement with CO2 detector",
          "E. Tilt head back in sniffing position, preoxygenation, cricoid pressure, paralysis, induction, intubate, confirm placement with CO2 detector"
        ],
        "answer": "A"
      },
      {
        "question_number": "3",
        "question": "A 72-year-old female presents after being ejected during a high-speed motor vehicle crash. Her heart rate (HR) is 155 beats/min, and blood pressure is 60/35 mmHg. Emergency medical technicians (EMT) were not able to obtain intravenous (IV) access. What is the best access for this patient so that fluid resuscitation can be initiated?",
        "choices": [
          "A. Saphenous vein cut down",
          "B. Ultrasound-guided left internal jugular vein triple-lumen catheter",
          "C. Right subclavian triple-lumen catheter using landmarks",
          "D. Intraosseous (IO) access at the humerus",
          "E. IO access at the tibia"
        ],
        "answer": "D"
      },
      {
        "question_number": "4",
        "question": "A 17-year-old female presents after a motor vehicle crash and is in hemorrhagic shock. A massive transfusion protocol is triggered. What is the optimal ratio in damage control resuscitation?",
        "choices": [
          "A. 2 plasma:1 platelet:1 red blood cell",
          "B. 1 plasma:1 platelet:1 red blood cell",
          "C. 1 plasma:1 platelet:3 red blood cells",
          "D. 2 plasma:1 cryoprecipitate:1 red blood cell",
          "E. 1 plasma:1 cryoprecipitate:1 red blood cell"
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "A 77-year-old male with a history of atrial fibrillation on dabigatran, a direct thrombin inhibitor, presents after a fall from a ladder. His HR is 130 beats/min and irregular, blood pressure is 82/44 mmHg, and FAST is positive, with fluid in the right upper quadrant (RUQ) and pelvis. Prior to proceed ing to the operating room, what is the best reversal agent for this patient’s anticoagulation?",
        "choices": [
          "A. Fresh-frozen plasma",
          "B. Prothrombin complex concentrates",
          "C. Protamine sulfate",
          "D. Idarucizumab",
          "E. Platelets"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "A 75-year-old morbidly obese male presents after a motor cycle crash. The primary survey demonstrates an intact airway, diminished breath sounds from the left chest, GCS of 10, and limited movement of upper extremities. His HR is 122 beats/min, and blood pressure is 80/44 mmHg. A left chest tube is placed with 1 L of bloody output. The patient has 2 L of saline infused. His HR decreases to 116 beats/min, and blood pressure is 86/48 mmHg. FAST was indeterminate. What is the next best step to evaluate for intraabdominal hemorrhage?",
        "choices": [
          "A. Serial abdominal examinations",
          "B. Diagnostic peritoneal tap",
          "C. Computed tomography (CT)",
          "D. Exploratory laparoscopy",
          "E. Exploratory laparotomy"
        ],
        "answer": "B"
      },
      {
        "question_number": "7",
        "question": "A 20-year-old female presents after a motor vehicle crash. She complains of diffuse abdominal pain. Her HR is 140 beats/min, and blood pressure is 78/42 mmHg. FAST is positive. Which statement best describes the FAST examination?",
        "choices": [
          "A. A 3.5-MHz convex-array transducer should be used.",
          "B. The hepatorenal space, known as the Morison pouch, is viewed between the 11th and 12th ribs in the right midaxillary line.",
          "C. The splenorenal space is evaluated between the 9th and 11th ribs in the left posterior axillary line.",
          "D. The bladder should preferentially be full before the examination to allow better visualization of fluid in the pelvis.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "8",
        "question": "A 23-year-old male is brought by emergency medical services (EMS) with a stab wound to the chest 2 cm medial from the right nipple. He was intubated en route; carotid pulse was present but faint, and pupils were responsive to light. After transferring the patient onto the gurney, no palpable pulses are appreciated. What is the next step in management?",
        "choices": [
          "A. Right tube thoracostomy",
          "B. Right anterolateral thoracotomy",
          "C. Median sternotomy",
          "D. Left anterolateral thoracotomy",
          "E. Left posterolateral thoracotomy"
        ],
        "answer": "D"
      },
      {
        "question_number": "9",
        "question": "A 29-year-old female is the driver of an automobile involved in a high-speed motor vehicle crash. She is 30 weeks pregnant. She complains of abdominal pain but does not have peritoneal signs. Her HR is 105 beats/min, and blood pressure is 108/66 mmHg. Which of the following statements is true regarding trauma in a pregnant patient?",
        "choices": [
          "A. Less than 5% of all pregnancies are affected by trauma.",
          "B. The uterus is protected by the bony pelvis until the beginning of the second trimester.",
          "C. A woman of 25 weeks’ gestation will have a palpable fundal height at approximately the level of the umbilicus.",
          "D. Blood volume during pregnancy increases by approxi mately 30%.",
          "E. Hypotensive patients should be placed in the right lateral position."
        ],
        "answer": "B"
      },
      {
        "question_number": "10",
        "question": "A 32-year-old male presents after being assaulted by a bat to his head, face, and torso. He opens his eyes to sternal rub, localizes to pain, and is only making groaning sounds. What is this patient’s GCS?",
        "choices": [
          "A. 7",
          "B. 8",
          "C. 9",
          "D. 10",
          "E. 11"
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "The patient in the previous scenario now only has extensor posturing. What is the next best step in management?",
        "choices": [
          "A. CT scan of the head",
          "B. Continue to perform primary and secondary surveys",
          "C. Bolus of hypertonic saline",
          "D. Elevation of the head of the bed 30 degrees",
          "E. Endotracheal intubation"
        ],
        "answer": "E"
      },
      {
        "question_number": "12",
        "question": "A CT of the head is obtained demonstrating a 3-cm right sided subdural hematoma with a 1-cm midline shift. The patient is taken to the operating room, and the hematoma is evacuated. Postoperatively, he is admitted to the intensive care unit (ICU), intubated, and sedated with an ICP monitor in place. Which of the following treatment measures can be used to maintain adequate cerebral perfusion pressure (CPP)?",
        "choices": [
          "A. Hyperventilation to a PaCO2 of 25 mmHg",
          "B. Mannitol, 1 g/kg IV",
          "C. Hydrocortisone, 100 mg IV every 8 h for 3 days",
          "D. Strict blood pressure control to a systolic range of 90 to 100 mmHg",
          "E. Reverse Trendelenburg positioning of the bed at all times"
        ],
        "answer": "B"
      },
      {
        "question_number": "13",
        "question": "A 21-year-old male is brought in by EMTs on a backboard with a cervical collar in place after a bar fight that included falling over a stool. The patient is belligerent, and urine drug screen is positive for methamphetamines and alcohol. Primary survey is normal, and secondary survey reveals several facial fractures and multiple right hand fractures. What is the best way to evaluate this patient’s c-spine and remove his collar?",
        "choices": [
          "A. Clinical examination",
          "B. Radiographic series of the cervical spine—cross-table lateral, anteroposterior, and open-mouth view of the dens",
          "C. Flexion–extension x-rays",
          "D. Magnetic resonance imaging (MRI) cervical spine followed by clinical examination when appropriate",
          "E. CT cervical spine followed by clinical examination when appropriate"
        ],
        "answer": "E"
      },
      {
        "question_number": "14",
        "question": "A 35-year-old male presents after being stabbed in the neck. A 3-cm wound is present at the base of the neck, just right of midline above the sternum. An expanding hematoma is noted. The patient is intubated for airway protection and taken to the operating room for exploration. What is the best initial incision to expose and control this injury?",
        "choices": [
          "A. Anterior border of the sternocleidomastoid muscle",
          "B. Median sternotomy",
          "C. Right anterolateral thoracotomy",
          "D. Collar incision",
          "E. Right infraclavicular incision"
        ],
        "answer": "A"
      },
      {
        "question_number": "15",
        "question": "A 19-year-old male is stabbed anterior to the sternocleidomastoid muscle. He has an expanding hematoma and develops hoarseness and stridor. After intubation, he is brought to the OR and the wound explored via an incision anterior to the sternocleidomastoid muscle. An injury 2 cm distal to the bifurcation of the common carotid artery is seen. While trying to gain control of the distal internal carotid artery, what structure is at risk for injury?",
        "choices": [
          "A. Vagus nerve",
          "B. Recurrent laryngeal nerve",
          "C. Hypoglossal nerve",
          "D. Inferior root of ansa cervicalis",
          "E. None of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "16",
        "question": "A 23-year-old male with a gunshot wound just superior to the clavicle presents to the emergency room (ER) with an expanding hematoma. Exposure of the first section of the vertebral artery involves:",
        "choices": [
          "A. Interventional radiology",
          "B. Unroofing the transverse foramen",
          "C. Neurosurgical consultation",
          "D. Division of the distal sternocleidomastoid muscle",
          "E. Division of the skull base"
        ],
        "answer": "D"
      },
      {
        "question_number": "17",
        "question": "A 21-year-old male sustains a gunshot wound to the right abdomen just lateral to and below the umbilicus. His abdomen is distended, and a FAST examination is positive. In the OR you identify a right iliac vein injury. What maneuver might be required to access the right iliac vein?",
        "choices": [
          "A. Division of the right iliac artery",
          "B. Transection of the right ureter",
          "C. Hip disarticulation",
          "D. Tamponade with Foley catheter",
          "E. None of the above"
        ],
        "answer": "A"
      },
      {
        "question_number": "18",
        "question": "In a low-resistance arterial vascular system, at which percent diameter reduction does a stenosis become flow limiting?",
        "choices": [
          "A. 10%",
          "B. 20%",
          "C. 40%",
          "D. 50%",
          "E. 80%"
        ],
        "answer": "D"
      },
      {
        "question_number": "19",
        "question": "Which of the following characterize duplex ultrasound imaging?",
        "choices": [
          "A. It is a combination of Doppler and D-mode ultrasound imaging.",
          "B. Lower frequencies (e.g., 3 MHz) are better suited for deep abdominal imaging, and higher frequencies (e.g., 7 MHz) are better for more superficial structures such as in situ vein grafts.",
          "C. High-frequency ultrasound waves have higher energy than do low-frequency ultrasound waves.",
          "D. Diagnosis of deep venous thrombosis (DVT) is made by the absence of color flow imaging alone.",
          "E. Calcification within a diseased artery is usually severe enough to prevent an adequate vascular ultrasound examination."
        ],
        "answer": "B"
      },
      {
        "question_number": "20",
        "question": "The advantages of lower-extremity arterial Doppler examinations performed with waveform analysis compared with the ankle-brachial index (ABI) alone include which of the following?",
        "choices": [
          "A. Calcification of the artery by diseases such as diabetes mellitus and chronic renal failure make the arterial wall incompressible, causing the ABI to be artificially decreased and unreliable.",
          "B. Inflow disease can be recognized by the delay in the downstroke of the waveform.",
          "C. The loss of reversal of flow when the arterial waveform transforms from triphasic to biphasic is observed with exercise or with moderate atherosclerosis.",
          "D. The ABI can be used to diagnose an arteriovenous fistula.",
          "E. The ABI can be used to diagnose a DVT."
        ],
        "answer": "C"
      },
      {
        "question_number": "21",
        "question": "What is the most common cause of a congenital hypercoagulable disorder?",
        "choices": [
          "A. Protein S deficiency",
          "B. Protein C deficiency",
          "C. Antithrombin III deficiency",
          "D. Activated protein C resistance (APC-R; factor V Leiden mutation)",
          "E. Homocysteinemia"
        ],
        "answer": "D"
      },
      {
        "question_number": "22",
        "question": "What is the most common cause of an acquired hypercoagulable state?",
        "choices": [
          "A. Smoking",
          "B. Heparin-induced thrombocytopenia (HIT)",
          "C. Antiphospholipid antibody (e.g., lupus anticoagulant)",
          "D. Warfarin",
          "E. Oral contraceptives"
        ],
        "answer": "A"
      },
      {
        "question_number": "23",
        "question": "A patient presents with a 2-cm, blue-red, raised nodule over his right shoulder. He has noted the painless mass for several years but notes that it has slowly been enlarging. He has no other symptoms, and the rest of his physical exam is normal. Punch biopsy of the tumor reveals uniform spindle cells in the deep dermis arranged in a storiform pattern, and it is CD-34 positive. What is the next step in treatment for this patient?",
        "choices": [
          "A. Start systemic imatinib therapy",
          "B. Wide local excision with SLNB",
          "C. CT scan of chest, abdomen, and pelvis for staging",
          "D. Radiation therapy",
          "E. Wide local excision of mass with 3- to 5-cm margins"
        ],
        "answer": "E"
      },
      {
        "question_number": "24",
        "question": "Which of the following adjuvant therapies for node-positive melanoma patients has shown to improve disease-free survival?",
        "choices": [
          "A. Doxorubicin chemotherapy",
          "B. Interferon-α2b (INF-α2b)",
          "C. Cyclophosphamide chemotherapy",
          "D. Injection with bacille Calmette–Guérin (BCG)",
          "E. Tremelimumab"
        ],
        "answer": "A"
      },
      {
        "question_number": "25",
        "question": "Which of the following is the most significant prognostic factor for patients with node-positive (stage III) melanoma?",
        "choices": [
          "A. Nodal size",
          "B. Number of involved lymph nodes",
          "C. Tumor thickness",
          "D. Tumor ulceration",
          "E. Patient gender"
        ],
        "answer": "B"
      },
      {
        "question_number": "26",
        "question": "Which of these treatments is indicated for the initial therapy of in-transit metastasis from cutaneous melanoma?",
        "choices": [
          "A. Mohs micrographic surgery",
          "B. Isolated limb perfusion",
          "C. Imatinib",
          "D. Prednisone",
          "E. Amputation"
        ],
        "answer": "B"
      },
      {
        "question_number": "27",
        "question": "A 37-year-old man is evaluated for a 4-month history of anemia and intermittent abdominal discomfort and distention 7 years after treatment of a stage I melanoma on his right forearm. The results of physical examination are normal, colonoscopy is negative, and CT demonstrates an area of invaginated jejunal mesentery with an adjacent dilated loop of small bowel. What is the next most appropriate step in the management of this patient?",
        "choices": [
          "A. Exploration and small bowel resection",
          "B. Video capsule endoscopy",
          "C. Systemic biochemotherapy",
          "D. Whole-body PET-CT",
          "E. Air-contrast small bowel barium study"
        ],
        "answer": "A"
      },
      {
        "question_number": "28",
        "question": "A 52-year-old female presents with metastatic melanoma to her lungs, liver, and spine. Match the appropriate treatment for metastatic melanoma with the correct target site.",
        "choices": [
          "A. INF-α and anticytotoxic T-lymphocyte–associated protein 4 (CTLA-4)",
          "B. Vemurafenib and BRAF protein",
          "C. Imatinib and MEK protein",
          "D. Trametinib and immune response modulator",
          "E. Ipilimumab and PD-1 protein"
        ],
        "answer": "B"
      },
      {
        "question_number": "29",
        "question": "A 22-year-old construction worker falls off of a ladder and lands on his left side. He fractures left ribs 6 to 12 and has a grade II splenic laceration. HR is 88 beats/min, and blood pressure is 110/76 mmHg. Hemoglobin is 12.3 g/dL. The patient is admitted to the ICU for serial hemoglobins and monitoring. Six hours later, the HR is 104 beats/min, blood pressure is 100/68 mmHg, and hemoglobin is 9.1 g/dL. What is the next step in management?",
        "choices": [
          "A. Exploratory laparoscopy",
          "B. Exploratory laparotomy",
          "C. Angiography",
          "D. Continue serial examinations",
          "E. Transfuse two units, and continue serial examinations"
        ],
        "answer": "C"
      },
      {
        "question_number": "30",
        "question": "The patient in the previous scenario is discharged home on hospital day 4 without needing operative intervention. She returns to the clinic 2 months after discharge with persistent dull continuous RUQ pain. She denies any fevers or chills, and all laboratory studies, including a hepatic function panel, are within normal limits. CT of the abdomen and pelvis is performed and reveals a localized homogeneous fluid collection directly adjacent to the liver. What is the correct diagnosis and treatment?",
        "choices": [
          "A. Hemobilia: exploratory laparotomy and ligation of bleeding vessel",
          "B. Hemobilia: ERCP with stent placement",
          "C. Biloma: image-guided percutaneous drainage",
          "D. Biloma: exploratory laparotomy with external drainage",
          "E. Hepatic abscess: angiogram"
        ],
        "answer": "C"
      },
      {
        "question_number": "31",
        "question": "A 22-year-old construction worker falls off of a ladder and lands on his left side. He fractures left ribs 6 to 12 and has a grade II splenic laceration. HR is 88 beats/min, and blood pressure is 110/76 mmHg. Hemoglobin is 12.3 g/dL. The patient is admitted to the ICU for serial hemoglobins and monitoring. Six hours later, the HR is 104 beats/min, blood pressure is 100/68 mmHg, and hemoglobin is 9.1 g/dL. What is the next step in management?",
        "choices": [
          "A. Exploratory laparoscopy",
          "B. Exploratory laparotomy",
          "C. Angiography",
          "D. Continue serial examinations",
          "E. Transfuse two units, and continue serial examinations"
        ],
        "answer": "C"
      },
      {
        "question_number": "32",
        "question": "The patient in the previous scenario is being monitored in the ICU. HR is now 122 beats/min, blood pressure is 88/56 mmHg, and hemoglobin is 8.2 g/dL. What is the next step in management?",
        "choices": [
          "A. Exploratory laparoscopy",
          "B. Exploratory laparotomy",
          "C. Angiography",
          "D. Continue serial examinations",
          "E. Transfuse two units, and continue serial examinations"
        ],
        "answer": "B"
      },
      {
        "question_number": "33",
        "question": "Which option provides the most appropriate management for the injury described?",
        "choices": [
          "A. Blunt mechanism: zone 3 nonexpanding retroperitoneal hematoma: exploration",
          "B. Blunt mechanism: zone 2 expanding retroperitoneal hematoma: angiogram",
          "C. Penetrating mechanism: zone 1 expanding hematoma: observation",
          "D. Penetrating mechanism: zone 1 nonexpanding hematoma: exploration",
          "E. Penetrating mechanism: zone 2 nonexpanding hematoma: angiogram"
        ],
        "answer": "D"
      },
      {
        "question_number": "34",
        "question": "A patient presents with multiple gunshot wounds to the abdomen and right leg. In the operating room, upon entry into the abdomen, a large amount of hemoperitoneum is encountered and all quadrants are packed immedi ately. Upon reinspection, the patient is noted to have an injury to the infrahepatic vena cava. How can you best expose this injury?",
        "choices": [
          "A. Transect the right renal artery",
          "B. Right medial visceral rotation",
          "C. Left medial visceral rotation",
          "D. Transect the pancreas",
          "E. All of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "35",
        "question": "A 23-year-old male presents with multiple gunshot wounds to the abdomen and right leg. During exploration, the patient is found to have a grade IV liver laceration and multiple enterotomies. He also has a destructive injury to his proximal superficial femoral artery with no distal pulses. Anesthesia tells you that the patient’s temperature is 36°C; he has received 10 units of product and is on vasopressors. Most recent arterial blood gas (ABG) shows a pH of 7.15 and a lactic acid that is twice the normal value. Which of these is a trigger to transition to damage control surgery in this patient?",
        "choices": [
          "A. Body temperature less than 37°C",
          "B. Arterial pH less than 7.2",
          "C. Base deficit greater than 6",
          "D. Hemoglobin less than 7",
          "E. Oxygen saturation less than 90%"
        ],
        "answer": "B"
      },
      {
        "question_number": "36",
        "question": "In the previous scenario, what is the best treatment option for the superficial femoral artery injury?",
        "choices": [
          "A. Ligation of the artery",
          "B. Placement of temporary intravascular shunt",
          "C. Definitive repair with a reversed saphenous vein interposition graft from the contralateral leg",
          "D. Definitive repair with an in situ saphenous vein interposition graft",
          "E. Definitive repair with a polytetrafluoroethylene (PTFE) graft"
        ],
        "answer": "B"
      },
      {
        "question_number": "37",
        "question": "The patient is a 52-year-old male involved in a high-speed head-on motor vehicle crash. He arrives to the ED unstable with BP 80/60 mmHg and HR 125 beats/min. Initial x-ray workup reveals an open-book pelvis fracture. Despite 2 L of crystalloid, the patient remains tachycardic and hypotensive. What techniques can be used to control bleeding in this patient?",
        "choices": [
          "A. Interventional radiology (IR) angiogram",
          "B. Preperitoneal packing",
          "C. External fixator",
          "D. Pelvic binder",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "38",
        "question": "For the patient in the previous scenario, a pelvic binder is placed and blood pressure and HR improves. A negative urethrogram is completed, and a Foley catheter is inserted. The urine output is bloody, and a cystogram demonstrates a bladder injury. Which combination of injury and management is correct?",
        "choices": [
          "A. Extraperitoneal bladder injury = operating room for primary repair",
          "B. Extraperitoneal bladder injury = suprapubic catheter placement",
          "C. Intraperitoneal bladder injury = operating room for primary repair",
          "D. Intraperitoneal bladder injury = maintain Foley catheter",
          "E. Intraperitoneal bladder injury = cystoscopy"
        ],
        "answer": "C"
      },
      {
        "question_number": "39",
        "question": "A 22-year-old man undergoes proctoscopy and exploratory laparotomy for a transpelvic gunshot wound. A 2-cm, partial-thickness laceration is found in the distal portion of the extraperitoneal rectum. What is the appropriate surgical management of this injury?",
        "choices": [
          "A. Resection of the injured area and anastomosis with a diverting colostomy",
          "B. Primary repair with a diverting colostomy",
          "C. Diverting colostomy only",
          "D. Presacral drainage only",
          "E. Primary repair only"
        ],
        "answer": "C"
      },
      {
        "question_number": "40",
        "question": "A 27-year-old female presents with multiple gunshot wounds to the abdomen. She is immediately taken to the operating room for an exploratory laparotomy. She is found to have a mid-ureter injury with a 2-cm segment loss. During the surgery, the patient becomes hypotensive, requiring vasopres sors. What is the best damage control treatment option for an unstable patient with a ureteral injury?",
        "choices": [
          "A. Ligation of the injured ureter",
          "B. Percutaneous nephrostomy",
          "C. Ureteral drainage via a single-J stent, which is external ized to the skin",
          "D. Placement of a bridging stent",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "41",
        "question": "A 30-year-old male is brought to the ED after being involved in a motorcycle crash. He is hemodynamically stable. Blood is noted at the urethral meatus. On portable pelvic radio graphs, he is found to have bilateral pubic rami fractures. He has not yet voided since admission. Which of the following is the best next step?",
        "choices": [
          "A. Wait for the patient to void freely before attempting transurethral bladder catheterization.",
          "B. Initially attempt gentle transurethral bladder catheteriza tion but stop if resistance is encountered.",
          "C. Obtain a urethrogram before attempting transurethral bladder catheterization.",
          "D. Insert a suprapubic cystostomy tube.",
          "E. Perform CT of the pelvis with three-dimensional reconstruction."
        ],
        "answer": "C"
      },
      {
        "question_number": "42",
        "question": "A 36-year-old male presents after a prolonged extrication from a motor vehicle crash. The patient has bilateral femur fractures and an open left tibia-fibula fracture with significant tissue loss and no distal pulses. Which state ment is correct regarding the management of a mangled extremity?",
        "choices": [
          "A. This patient requires angiography prior to going to the operating room.",
          "B. A mangled extremity severity score ≥ 5 is predictive of need for amputation.",
          "C. In a hemodynamically unstable patient, the definitive vascular repair should be completed first.",
          "D. Bony injury should be reduced prior to definitive vascular repair.",
          "E. Optimal maximum time to surgery should be less than 24 h from injury."
        ],
        "answer": "D"
      },
      {
        "question_number": "43",
        "question": "The patient in the previous scenario is taken to the ICU for postoperative monitoring. It is noted that his urine output has decreased in the past 2 h and is very dark. Urinalysis is positive for blood, but there are no red blood cells on microscopic analysis. What is true regarding his diagnosis?",
        "choices": [
          "A. Best treatment includes aggressive IV fluid resuscitation.",
          "B. All patients with rhabdomyolysis require dialysis.",
          "C. The renal failure from rhabdomyolysis typically resolves within 3 to 5 days.",
          "D. Severe hyponatremia is a frequent complication.",
          "E. Alkalinization to a pH between 8 and 9 is an important treatment goal."
        ],
        "answer": "A"
      },
      {
        "question_number": "44",
        "question": "A 34-year-old male presents with a gunshot wound to his left thigh with no pulses in his feet. The patient is taken immediately to the operating room, and a superficial femoral artery injury is repaired with a saphenous vein interposition graft. At the end of the surgery, the patient had equal pulses bilaterally and was neurologically intact. Five hours postop eratively, the left distal pulses are diminished and he begins to experience pain with passive dorsiflexion and extension. Which of the following statements is true regarding compart ment syndrome in an extremity?",
        "choices": [
          "A. Fractures are the cause of approximately 30% of all compartment syndromes.",
          "B. The lateral compartment of the lower part of the leg is the most commonly affected.",
          "C. A compartment pressure of 25 mmHg negates a need for fasciotomy.",
          "D. Loss of pulses is an early clinical development.",
          "E. A four-compartment fasciotomy should be performed."
        ],
        "answer": "E"
      },
      {
        "question_number": "45",
        "question": "A 24-year-old male presents after a motorcycle crash. He is found to have multiple left-sided rib fractures, a grade II splenic laceration, and a small 2-mm subdural hematoma. His GCS score is 15. The patient is admitted to the ICU for serial hemoglobin and neurologic checks. Clinical examination, hemoglobin, and repeat CT of the head at 48 h remain stable. What is the most appropriate deep vein thrombosis (DVT) prophylaxis to initiate at this time?",
        "choices": [
          "A. Early ambulation only",
          "B. Sequential compression devices only",
          "C. Retrievable IVC filter",
          "D. Subcutaneous heparin 5000 units daily",
          "E. Subcutaneous Lovenox 30 mg twice a day"
        ],
        "answer": "E"
      },
      {
        "question_number": "46",
        "question": "A 79-year-old female falls at home. In the ER, she is found to have a pelvic fracture with a large retroperitoneal hematoma. While waiting for angioembolization by Interventional Radiology (IR), the patient becomes hypotensive and is transfused with two units of packed red blood cells and two units of fresh-frozen plasma. After IR, the patient starts to complain of shortness of breath, has desaturations, and requires intubation. Which statement best describes a transfusion-related acute lung injury (TRALI)?",
        "choices": [
          "A. Onset occurs 24 h after a transfusion.",
          "B. Onset occurs most often after transfusion with fresh frozen plasma.",
          "C. Clinical findings include dyspnea, hypertension, and bradycardia.",
          "D. Treatment includes plasmapheresis.",
          "E. Affected patients cannot receive blood transfusions in the future."
        ],
        "answer": "B"
      },
      {
        "question_number": "47",
        "question": "A coal mine explodes in a rural part of the country. There is only one small local hospital, and critical patients will need to be airlifted to the closest Level 1 Trauma Center. Which patient should be triaged to the expectant category?",
        "choices": [
          "A. A 22-year-old male with a broken femur",
          "B. An 18-year-old female with 90% total body surface area (TBSA) burns with agonal breathing",
          "C. A 38-year-old male with multiple left rib fractures and decreased breath sounds",
          "D. A 29-year-old female with a traumatic amputation of her right forearm",
          "E. A 34-year-old male with a fractured thoracic spine and traumatic paralysis"
        ],
        "answer": "B"
      },
      {
        "question_number": "48",
        "question": "Which of the following is true about a flail chest?",
        "choices": [
          "A. Paradoxical movement of the chest wall occurs during expiration.",
          "B. It is most commonly caused by a low-impact fall on the chest.",
          "C. The most important determinant of survival is the underlying pulmonary contusion.",
          "D. Surgical repair is not indicated as it has not shown to improve a patient’s overall prognosis.",
          "E. This patient should be placed in the supine position and be splinted with a sandbag placed across the chest."
        ],
        "answer": "C"
      }
    ],
    "Chapter 12: Burns": [
      {
        "question_number": "1",
        "question": "Select the true statement regarding the epidemiology of burn injury:",
        "choices": [
          "A. Most burn injuries occur in occupational environments.",
          "B. Young adult men are the most likely to suffer burn injury.",
          "C. The most common cause of death after admission for a burn injury is airway occlusion.",
          "D. Scalding is the most common cause of burns in children younger than 5 years.",
          "E. Prevention has not had a significant impact on the incidence or mortality of burn injury."
        ],
        "answer": "D"
      },
      {
        "question_number": "2",
        "question": "Which of the following regarding burn wound depth is true?",
        "choices": [
          "A. First-degree burns heal rapidly but contribute significantly to the total body surface area (TBSA) burned in large, mixed-depth wounds.",
          "B. Second-degree burns characteristically cause erythema, pain, and blistering.",
          "C. Third-degree burns are generally painful and extremely sensitive to touch.",
          "D. Fourth-degree burns mandate amputation of the involved extremities.",
          "E. Superficial partial-thickness burn is the contemporary term for first-degree burns."
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "Which of the following statements regarding the order or description of the zones of injury is correct?",
        "choices": [
          "A. A zone of hyperemia inside a zone of stasis",
          "B. A zone of hyperemia superficial to a zone of stasis, with a deeper zone of coagulation beneath",
          "C. A zone of coagulation at the surface of a burn wound, a zone of stasis within the injured dermal layer, and a deep zone of hyperemia characterized by vasodilated subcutaneous vessels",
          "D. A zone of coagulation, surrounded by a zone of stasis, which is surrounded by a zone of hyperemia",
          "E. A zone of hemorrhagic burn that must be coagulated, a zone of stasis in which the depth of burn injury is already fixed, and a zone of hyperemia that may convert to coagulation"
        ],
        "answer": "D"
      },
      {
        "question_number": "4",
        "question": "Select the most accurate statement regarding burn injury:",
        "choices": [
          "A. Contact burns occur commonly and rarely require grafting.",
          "B. Intoxication is infrequently associated with deep burn injury.",
          "C. Circumferential burns on both feet are seen in accidental bathing injuries in children.",
          "D. Flash burns are generated by brief, intense heat, and articles of clothing are frequently protective.",
          "E. Electrical burns are deeper than they appear because of the high flash temperatures generated by arcing."
        ],
        "answer": "D"
      },
      {
        "question_number": "5",
        "question": "Which of the following patients do not meet the criteria for referral to a burn center?",
        "choices": [
          "A. A 50-year-old woman with a 1% TBSA partial-thickness burn on her left hand from a cooking accident",
          "B. A 30-year-old construction worker with pain and blistering bilaterally on the knees after kneeling in wet cement all afternoon",
          "C. A 25-year-old man with 7% TBSA partial-thickness burns on the chest",
          "D. A 42-year-old woman with no cutaneous injury, found lying down at the scene of a house fire, and noted to have carbonaceous sputum after intubation in the field",
          "E. An 18-year-old man in a motor vehicle collision with 30% TBSA burns on his chest and circumferential burns bilaterally on his arms"
        ],
        "answer": "C"
      },
      {
        "question_number": "6",
        "question": "A 25-year-old patient has been in the burn intensive care unit (ICU) intubated and sedated for 2 weeks after an 80% TBSA burn. He suddenly develops hypotension, tachycardia, and melena. What type of surgical problem is this patient most likely to have?",
        "choices": [
          "A. Curling’s ulcer",
          "B. Cushing’s ulcer",
          "C. Marjolin’s ulcer",
          "D. Dieulafoy’s lesion",
          "E. Boerhaave’s syndrome"
        ],
        "answer": "A"
      },
      {
        "question_number": "7",
        "question": "A 45-year-old patient presents after being burned in a house fire. The patient has deep, dry, and painless circumferential burns around both legs, the anterior torso and abdomen, and the circumferential left arm. Additionally, the patient has painful erythema involving the circumferential right arm. What is this patient’s %TBSA?",
        "choices": [
          "A. 63%",
          "B. 72%",
          "C. 45%",
          "D. 81%",
          "E. 36%"
        ],
        "answer": "A"
      },
      {
        "question_number": "8",
        "question": "A 22-year-old, 100-kg male presents with 70% TBSA burns. He initially presented directly from the scene to an outside hospital and has been getting a liter of normal saline an hour until he was able to be air-lifted to the burn center. In the 4 h since his burn, he has received 5 L of lactated Ringer’s solution. He is currently hypotensive and oliguric. Which initial fluid administration plan is best for continued resuscitation of this patient?",
        "choices": [
          "A. Continue bolusing 1 L of normal saline each time the patient is hypotensive",
          "B. Lactated Ringer’s solution (LR) at 1125 mL/h for 8 h and then 875 mL/h for the following 16 h",
          "C. Immediate transfusion of two units of packed red blood cells",
          "D. LR at 2250 mL/h for 4 h and then 875 mL/h for the following 16 h",
          "E. LR at 1750 mL/h for 8 h and then 875 mL/h for the following 16 h"
        ],
        "answer": "D"
      },
      {
        "question_number": "9",
        "question": "Which of the following is correct regarding inhalation injury in burn patients?",
        "choices": [
          "A. The admission chest radiograph is useful for ruling out inhalation injury on admission.",
          "B. Supraglottic inhalation injury may necessitate intubation even if gas exchange is initially unaffected.",
          "C. With proper pulmonary toilet, pneumonia is an unusual complication of smoke inhalation.",
          "D. Smoke inhalation is basically just a subset of acute respiratory distress syndrome (ARDS) seen in burn victims.",
          "E. Daily bronchoscopy is mandatory to monitor the evolution of inhalation injury."
        ],
        "answer": "B"
      },
      {
        "question_number": "10",
        "question": "An 18-month-old boy presents to the burn unit after sustaining a scald burn to the buttocks. Which of the following burn patterns or components of the history is MOST suspicious for intentional burns in children?",
        "choices": [
          "A. Irregular burn margin and depth",
          "B. Large TBSA of scald",
          "C. Scald injury sustained from spilling of nonwater hot liquid",
          "D. Symmetrical involvement of extremities",
          "E. Trunk, neck, or head involvement"
        ],
        "answer": "D"
      },
      {
        "question_number": "11",
        "question": "A 45-year-old patient presents following a motor vehicle crash with 30% TBSA burns to the torso, face, and extremities. On presentation to the trauma bay, he is alert with a Glasgow coma score (GCS) of 15, but is hypotensive with diffuse abdominal pain. Which of the following is true regarding the management of combined trauma and burn victims?",
        "choices": [
          "A. Chest tubes should be placed through burned skin as the chest tube dressing serves as appropriate additional coverage for the burn.",
          "B. In a patient with thoracic trauma and concern for pulmonary contusions and chest wall burns, patients should be deliberately underresuscitated to prevent an increase in pulmonary edema.",
          "C. In patients with abdominal trauma and abdominal burns, a paramedian incision is recommended due to its lower rates of dehiscence.",
          "D. The most common cause of combined trauma and burn injuries is from house fires and falling debris.",
          "E. A neurologically impaired patient following automobile accident and fire must be quickly assessed for CO and cyanide poisoning as this can exacerbate traumatic brain injury."
        ],
        "answer": "E"
      },
      {
        "question_number": "12",
        "question": "An 88-year-old woman suffers 11% TBSA superficial partial-thickness burn as a result of scalding with hot soup. Which of the following is most correct regarding the topical antimicrobial agents that may be used?",
        "choices": [
          "A. Mafenide acetate is an undesirable choice because of metabolic alkalosis caused by carbonic anhydrase inhibition.",
          "B. Silver nitrate solutions can lead to methemoglobinemia, which causes a shift of the oxygen–hemoglobin dissociation curve to the right.",
          "C. Silver sulfadiazine should be discontinued if neutropenia occurs as a result of its use.",
          "D. Silver sulfadiazine induces epithelial cell migration, but it is often painful on application.",
          "E. Elemental silver-impregnated dressings must be moist ened frequently with sterile water to retain the antimicro bial activity."
        ],
        "answer": "E"
      },
      {
        "question_number": "13",
        "question": "A 23-year-old man presents with diffuse skin sloughing after ingestion of trimethoprim-sulfamethoxazole. Which of the following is an independent risk factor for increased mortality in the SCORe of Toxic Epidermal Necrosis (SCORTEN) illness severity scale?",
        "choices": [
          "A. Age > 30",
          "B. Serum bicarbonate > 20",
          "C. Serum glucose > 150",
          "D. Serum BUN > 28",
          "E. Heart rate > 90 beats/min"
        ],
        "answer": "D"
      },
      {
        "question_number": "14",
        "question": "A 35-year-old male comes in following an occupational injury in which he sustained 35% full-thickness burns to his torso and upper extremities. On hospital day #2, the decision is made to perform excision of his burns with split-thickness skin grafting. Which of the following is associated with early excision and grafting?",
        "choices": [
          "A. Decreased mortality",
          "B. Decreased functional outcomes",
          "C. Increased length of stay",
          "D. Increased cost",
          "E. Increased number of operations"
        ],
        "answer": "A"
      },
      {
        "question_number": "15",
        "question": "A 22-year-old man suffers partial- and full-thickness burns to 45% TBSA in a gas explosion while at work. Which of the following is most accurate regarding surgical management of his wounds?",
        "choices": [
          "A. Assessment of the depth of injury on admission is accurate enough for definitive surgery to be planned in more than 90% of cases.",
          "B. Fascial excision allows grafts to be placed over a healthy muscle bed and is the preferred approach to burns on the hands and dorsal surface of the feet.",
          "C. Sheet (unmeshed) grafting is preferred for areas subjected to repeated shear, thus making it the choice for extensive burns on dorsal surfaces.",
          "D. Excision of burn wounds within 24 h of injury should not be performed due to the effects of hypothermia on coagulopathy and the time required to assess for adequacy of resuscitation.",
          "E. Widely meshed grafts minimize the degree of wound contraction associated with the use of split-thickness grafts."
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "Which of the following is correct regarding the skin substitutes used in burn reconstruction?",
        "choices": [
          "A. Cultured epidermal autografts have dramatically increased survival in patients with nearly 100% TBSA burn injuries.",
          "B. Allografting to burn wound sites is limited to temporary closure because of eventual rejection of the graft by the patient.",
          "C. Porcine xenograft has the advantage of better early vascularization and engrafting after placement as a result of decreased antigenicity in comparison to most cadaveric human allografts.",
          "D. Use of the Integra Dermal Regeneration Template is advantageous because of lower rates of wound infection than with early autografting in heavily colonized burn wounds.",
          "E. Vascularization of porcine xenograft may be aided by the use of low-dose cyclosporine, provided that the patient is free of infectious complications at the time of placement."
        ],
        "answer": "B"
      },
      {
        "question_number": "17",
        "question": "Which of the following statements is correct regarding surgical anatomy and technique in operations commonly performed by burn surgeons?",
        "choices": [
          "A. The main concept for incisions in torso escharotomies is separating the chest eschar down the midline, allowing free expansion of each side of the torso.",
          "B. A dermatome must be held at a 0-degree angle to the skin when initiating skin grafting.",
          "C. A hand escharotomy is performed on the palmar side of the hand between the metacarpals.",
          "D. Effective mechanisms to control bleeding following tangential excision of burns include diluted dressings with epinephrine, or fibrinogen and thrombin spray.",
          "E. Disadvantages of a fascial incision include increased blood loss compared with tangential incisions."
        ],
        "answer": "D"
      },
      {
        "question_number": "18",
        "question": "A 22-year-old utility company employee is found down at a job site at the base of the ladder. He has a charred wound in the left temporal region with palpable shards of skull present. His left arm is waxy and fixed in flexion. There are full thickness burns on his left flank, the lower part of his left leg is firm, and the toes of his left foot are burned and missing. Which of the following is the correct statement regarding electrical injury?",
        "choices": [
          "A. The cause of the dark, reddish urine noted in the urinary catheter will most likely be revealed by computed tomography of the abdomen.",
          "B. Signs concerning for compartment syndrome should prompt urgent escharotomy of the affected limbs.",
          "C. Neurologic deficits that develop in a delayed fashion, weeks to months after the injury, have a better prognosis.",
          "D. Early fascial decompression of the extremities may be important in preserving limb function.",
          "E. Myoglobinuria is addressed by maintaining an hourly urine output of 0.5 mL/kg in adults and 1 mL/kg in children less than 20 kg."
        ],
        "answer": "D"
      }
    ]
  },
  "SECTION VI: ALIMENTARY TRACT AND ABDOMEN": {
    "Chapter 23: Colon and Rectum": [
        {
        "question_number": "1",
        "question": "Which of the following is a true statement regarding colonic physiology?",
        "choices": [
          "A. Butyrate, a short-chain fatty acid, is the primary source of energy for colonocytes.",
          "B. Water and electrolytes are absorbed primarily in the descending colon.",
          "C. Approximately 5 L of chyme enters the colon each day.",
          "D. The colon is more efficient than the small intestine at absorbing sodium.",
          "E. Propulsive action in the right colon is initiated by haustral segmentation."
        ],
        "answer": "A"
      },
      {
        "question_number": "2",
        "question": "Which of the following statements is true regarding lower gastrointestinal endoscopy?",
        "choices": [
          "A. Flexible sigmoidoscopy is equivalent to full colonoscopy in colorectal cancer detection.",
          "B. Flexible sigmoidoscopy should be performed as a screening test every 3 years in a patient with a family history of colorectal cancer.",
          "C. The risk for colonic perforation after flexible sigmoidoscopy is approximately 1 in 10,000 examinations.",
          "D. Flexible sigmoidoscopy requires a complete bowel preparation and is usually done in the endoscopy suite.",
          "E. None of the above."
        ],
        "answer": "C"
      },
      {
        "question_number": "3",
        "question": "A 75-year-old nursing home resident comes to the emergency department after a 1-day history of abdominal distention, cramping, and obstipation. Plain abdominal films show a hugely dilated cecum (15 cm). What is the next best step in the management of this patient?",
        "choices": [
          "A. A low-residue diet and observation",
          "B. Flexible sigmoidoscopy for decompression",
          "C. Emergent exploratory laparotomy and cecopexy",
          "D. Emergent exploratory laparotomy with cecostomy tube placement",
          "E. Emergent exploratory laparotomy with right hemicolectomy"
        ],
        "answer": "E"
      },
      {
        "question_number": "4",
        "question": "Which of the following statements is true regarding a sigmoid volvulus?",
        "choices": [
          "A. Plain abdominal radiographs are not useful for making the diagnosis.",
          "B. It is less common than cecal volvulus.",
          "C. It is typically a complication of a short, thick, redundant mesentery.",
          "D. A rigid sigmoidoscope can be used to perform decompression.",
          "E. Nonoperative detorsion is successful in about 15% of patients."
        ],
        "answer": "D"
      },
      {
        "question_number": "5",
        "question": "Which of the following statements is true about surgical therapy for sigmoid volvulus?",
        "choices": [
          "A. Emergent sigmoid resection with end colostomy has a mortality rate of less than 1%.",
          "B. Elective resection is contraindicated in patients older than 75 years because of their high mortality rate.",
          "C. Mesenteric fixation is a durable option for elective repair.",
          "D. Elective sigmoid resection can be performed with an 80% success rate and a mortality rate of less than 5%.",
          "E. The risk for recurrence is low after successful nonoperative reduction; thus resection is not necessary."
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "With regard to colonic diverticula, which of the following is true?",
        "choices": [
          "A. They are true diverticula.",
          "B. They occur along the antimesenteric taeniae.",
          "C. They occur in rows between the antimesenteric and mesenteric taeniae.",
          "D. They are most commonly located in the right colon.",
          "E. The prevalence is similar in developed and developing nations."
        ],
        "answer": "C"
      },
      {
        "question_number": "7",
        "question": "A 55-year-old woman has had a 1-day history of cramping in the left lower quadrant of the abdomen, fevers, and chills. She also states that she has experienced some nausea but no vomiting. She does not take any medications and has no other past medical history. Which of the following statements is false regarding her condition?",
        "choices": [
          "A. Computed tomography (CT) scan has become the standard in confirming the diagnosis of diverticulitis and can help guide the initial management.",
          "B. CT-guided percutaneous drainage of small (< 4-cm) diverticular abscesses is helpful in the management of these patients.",
          "C. Flexible sigmoidoscopy or colonoscopy should be performed early in the course of the disease to confirm the diagnosis.",
          "D. Uncomplicated disease can be managed with clear liquids and outpatient oral antibiotics.",
          "E. The patient should undergo a colonoscopy once the inflammation has subsided."
        ],
        "answer": "C"
      },
      {
        "question_number": "8",
        "question": "The patient in Question 7 was treated with intravenous antibiotics and bowel rest, with good response. She is now wondering when she should have surgery to prevent recur rence. What should your recommendation be?",
        "choices": [
          "A. After the first uncomplicated episode of diverticulitis",
          "B. After two uncomplicated episodes of diverticulitis",
          "C. After three uncomplicated episodes of diverticulitis",
          "D. Based on an individual basis considering age and severity of symptoms",
          "E. Never, unless the patient has a complication"
        ],
        "answer": "D"
      },
      {
        "question_number": "9",
        "question": "Which of the following is true about elective resection for diverticulitis?",
        "choices": [
          "A. Laparoscopic surgery is contraindicated.",
          "B. Resection of the distal sigmoid and anastomosis of the splenic flexure to the mid-rectum is recommended to prevent recurrence.",
          "C. The distal extent of the resection should include the entire sigmoid colon.",
          "D. Primary resection and anastomosis without bowel preparation have been shown to have no change in the anastomotic leak rate.",
          "E. Frozen section to rule out malignancy should be performed on all specimens."
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "With regard to emergent surgery for diverticulitis, which of the following is false?",
        "choices": [
          "A. Free perforation with peritonitis has a mortality rate of approximately 35%.",
          "B. A Hartmann procedure or primary resection with anastomosis should be considered in patients with peritonitis.",
          "C. Primary resection with anastomosis and diverting ileostomy has shown lower mortality rates and better outcomes than the Hartmann procedure for patients with peritonitis.",
          "D. Colocolonic anastomosis is safe in patients without peritonitis.",
          "E. Anastomotic leak rates are higher in emergent resections."
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "A 75-year-old man had an acute lower GI bleed that required six units of blood. Colonoscopy and upper endoscopy revealed no site of bleeding. Which of the following is true regarding his condition?",
        "choices": [
          "A. Diverticula are the most common source of lower GI bleeding.",
          "B. Bleeding diverticula usually resolve without intervention.",
          "C. Radionuclide imaging is of limited value for diagnosis of the bleeding site.",
          "D. Angiography should be the initial diagnostic maneuver for a patient with a massive lower GI bleed.",
          "E. The bleeding is from a venous source."
        ],
        "answer": "A"
      },
      {
        "question_number": "12",
        "question": "Which of the following is not a predisposing condition for the development of Clostridium difficile colitis?",
        "choices": [
          "A. Administration of second-generation cephalosporins",
          "B. Cancer",
          "C. Inflammatory bowel disease",
          "D. Renal failure",
          "E. Liver cirrhosis"
        ],
        "answer": "E"
      },
      {
        "question_number": "13",
        "question": "A 55-year-old man is diagnosed with Ogilvie syndrome 1 week after coronary artery bypass grafting. Which of the following should not be considered as a part of the management of this patient?",
        "choices": [
          "A. Rectal tube decompression",
          "B. Serial abdominal exams",
          "C. Fluid and electrolyte correction",
          "D. Neostigmine",
          "E. CT scan with intravenous and oral contrast"
        ],
        "answer": "A"
      },
      {
        "question_number": "14",
        "question": "With regard to ulcerative colitis, which of the following statements is true?",
        "choices": [
          "A. It affects mainly the small intestine.",
          "B. It is characterized by transmural inflammation and ulceration.",
          "C. It is associated with a lower incidence of colon cancer.",
          "D. The rectum is usually spared from inflammation.",
          "E. A common clinical finding is bloody diarrhea."
        ],
        "answer": "E"
      },
      {
        "question_number": "15",
        "question": "An 18-year-old woman is admitted to the hospital with a flare-up of her ulcerative colitis. For how many days should medical treatment be attempted before surgical therapy is recommended?",
        "choices": [
          "A. 1",
          "B. 3",
          "C. 5",
          "D. 7",
          "E. 9"
        ],
        "answer": "D"
      },
      {
        "question_number": "16",
        "question": "A 23-year-old man with a 4-year history of ulcerative colitis presents with a 2-month history of anorexia, malaise, and intermittent fever. His past medical history is significant for sclerosing cholangitis. Colonoscopy is performed, and multiple biopsies show moderate-grade dysplasia. Which of the following is true?",
        "choices": [
          "A. He has a higher risk for cholangiocarcinoma.",
          "B. A total proctocolectomy and end ileostomy is the best course of action.",
          "C. His risk for colorectal cancer is 35% at 20 years from the time of diagnosis of ulcerative colitis.",
          "D. His risk for colorectal cancer is not related to the extent of his disease.",
          "E. He should wait until the dysplasia has progressed to carcinoma in situ before proceeding with surgery."
        ],
        "answer": "A"
      },
      {
        "question_number": "17",
        "question": "A 24-year-old woman has fulminant ulcerative colitis refractory to high-dose intravenous steroids. What surgical procedure would you recommend?",
        "choices": [
          "A. Total proctocolectomy with an S-pouch",
          "B. Total proctocolectomy with a Kock pouch",
          "C. Subtotal colectomy, end ileostomy, and Hartmann pouch",
          "D. Segmental colectomy",
          "E. Segmental colectomy and diverting loop ileostomy"
        ],
        "answer": "C"
      },
      {
        "question_number": "18",
        "question": "Which of the following patients would not be a good candidate for an ileal pouch–anal anastomosis (IPAA)?",
        "choices": [
          "A. A 22-year-old female with ulcerative colitis and a history of anorectal abscess",
          "B. A 23-year-old with familial adenomatous polyposis",
          "C. An obese 24-year-old woman with a body mass index of 45",
          "D. An 18-year-old woman with a history of long-standing Crohn’s colitis",
          "E. A 21-year-old woman with toxic megacolon"
        ],
        "answer": "D"
      },
      {
        "question_number": "19",
        "question": "With regard to colorectal polyps, which of the following is false?",
        "choices": [
          "A. Hyperplastic polyps have no malignant potential.",
          "B. Adenomatous polyps larger than 2 cm have a 50% chance of harboring invasive carcinoma.",
          "C. Tubular adenomas account for about 85% of all neoplastic polyps.",
          "D. Tubulovillous adenomas are smaller than villous adenomas and have an intermediate risk for containing an invasive carcinoma.",
          "E. Most colonic malignancies arise from a benign polyp."
        ],
        "answer": "B"
      },
      {
        "question_number": "20",
        "question": "A 75-year-old patient who takes aspirin and clopidogrel (Plavix) had a screening colonoscopy. A 2.5-cm sessile polyp was found in the sigmoid colon. Which of the following is the most appropriate management?",
        "choices": [
          "A. Stop the aspirin and clopidogrel for 5 to 7 days before performing an endoscopic polypectomy.",
          "B. Laparoscopic sigmoid resection",
          "C. Endoscopic mucosal resection",
          "D. Endoscopic tattooing of the area and open sigmoid resection",
          "E. Cautery ablation"
        ],
        "answer": "A"
      },
      {
        "question_number": "21",
        "question": "Regarding Gardner’s syndrome, which of the following statements is incorrect?",
        "choices": [
          "A. Gardner’s syndrome is part of the FAP spectrum.",
          "B. It has an autosomal dominant inheritance pattern.",
          "C. Epidermoid cysts of the skin and osteomas of the jaw, skull, and long bones are common findings.",
          "D. It is associated with desmoid tumors and periampullary cancer.",
          "E. Total colectomy is not indicated because of the low risk for malignancy."
        ],
        "answer": "E"
      },
      {
        "question_number": "22",
        "question": "A 23-year-old man had a screening colonoscopy because his father died at a young age of colon cancer. He was found to have two adenomatous polyps in the right colon. Genetic testing confirms the diagnosis of hereditary nonpolyposis colorectal cancer (HNPCC). Which of the following statements about HNPCC is true?",
        "choices": [
          "A. It follows an autosomal recessive inheritance pattern.",
          "B. It is associated with extracolonic malignancies of the endometrium, stomach, small intestine, and ovary.",
          "C. There is no benefit to total abdominal colectomy over segmental resection.",
          "D. Screening should start at age 25 or 10 years younger than the age at which the youngest affected relative was diagnosed, whichever is earlier.",
          "E. It is associated with a mutation in the APC gene."
        ],
        "answer": "B"
      },
      {
        "question_number": "23",
        "question": "A 55-year-old asymptomatic man with a family history of colorectal cancer has a mass in the cecum seen on a screening colonoscopy. Which of the following is true?",
        "choices": [
          "A. His prognosis is better than if he had presented with obstructive symptoms.",
          "B. The workup should include carcinoembryonic antigen testing and CT of the chest and abdomen.",
          "C. The operation of choice is an ileocecectomy.",
          "D. Laparoscopic right colectomy is superior to the open approach in terms of long-term oncologic results.",
          "E. All of the above."
        ],
        "answer": "A"
      },
      {
        "question_number": "24",
        "question": "With regard to colorectal cancer, which of the following statements is true?",
        "choices": [
          "A. For stage III tumors, radiation therapy has been shown to improve survival rates.",
          "B. FOLFOX (5-fluorouracil, oxaliplatin, and leucovorin) chemotherapy has been shown to improve the survival rate in stage III colon cancer.",
          "C. Total mesorectal excision is used for rectal cancer involving the upper two-thirds of the rectum.",
          "D. Stage III colon cancer that invades an adjacent organ is a contraindication to surgery.",
          "E. Colorectal cancer is the fifth most common cancer in the United States."
        ],
        "answer": "B"
      },
      {
        "question_number": "25",
        "question": "A 65-year-old man has a routine screening colonoscopy, and a 2.5-cm rectal mass is found 3 cm from the anal verge. A biopsy specimen confirms adenocarcinoma, and a clinical workup reveals a T3N0 lesion. What is the appropriate treatment for this patient?",
        "choices": [
          "A. Low anterior resection",
          "B. Low anterior resection with neoadjuvant chemoradiation therapy",
          "C. Abdominoperineal resection (APR) with neoadjuvant chemoradiation therapy",
          "D. Chemoradiation therapy with sphincter preservation",
          "E. Transanal endoscopic microsurgery"
        ],
        "answer": "C"
      },
      {
        "question_number": "26",
        "question": "A 68-year-old woman is evaluated for a synchronous liver and colon cancer. Colonoscopy showed a 3-cm lesion in the mid-transverse colon. A biopsy specimen confirms adenocarcinoma. CT of the chest, abdomen, and pelvis shows a single 2.5-cm lesion in segment 6 of the liver. The patient undergoes a transverse colectomy and right hepatic lobectomy. Pathologic examination of the colon reveals a moderately differentiated adenocarcinoma penetrating into the pericolic fat with 2 of 14 lymph nodes positive for metastasis. The hepatic tumor is a metastasis with margins free of disease. What is the appropriate adjuvant therapy for this patient?",
        "choices": [
          "A. Chemotherapy",
          "B. Radiation therapy",
          "C. Chemoradiation therapy",
          "D. Immunotherapy",
          "E. No adjuvant therapy"
        ],
        "answer": "A"
      },
      {
        "question_number": "27",
        "question": "A 35-year-old woman with Crohn’s disease comes to the emergency department complaining of an exquisitely painful perirectal mass. Which statement is true regarding her condition?",
        "choices": [
          "A. The abscess is most likely located in the perianal space.",
          "B. After drainage, the abscess cavity should be packed.",
          "C. Probing of the abscess cavity at the time of drainage should be performed.",
          "D. The patient will likely require a fistulotomy in the near future.",
          "E. Drainage of the abscess should be accompanied by placement of a seton to prevent recurrence."
        ],
        "answer": "D"
      },
      {
        "question_number": "28",
        "question": "With regard to anal carcinoma, which of the following statements is true?",
        "choices": [
          "A. The incidence of anal cancer is highest among patients with acquired immunodeficiency syndrome (AIDS).",
          "B. The presence of perirectal lymphadenopathy is the most important factor affecting survival.",
          "C. Human papillomavirus (HPV) 16 is associated with anal carcinoma.",
          "D. Patients with HIV should receive lower doses of radiation because of their compromised immune status.",
          "E. Basaloid carcinoma is less aggressive than squamous cell carcinoma."
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "A 23-year-old man had a flexible sigmoidoscopy that showed a 3-cm polypoid lesion in the rectum. A biopsy specimen confirmed adenocarcinoma. Which of the following statements is true regarding this patient’s condition?",
        "choices": [
          "A. If there is no evidence of metastatic disease, he is most likely a candidate for sphincter-sparing surgery.",
          "B. Endorectal ultrasound is useful in staging the tumor.",
          "C. Radiation therapy should precede surgery if the tumor is larger than 3 cm.",
          "D. Neoadjuvant therapy should be given if the tumor is shown to be T3.",
          "E. If the tumor is fixed to the pelvic structures, it should be considered unresectable."
        ],
        "answer": "B"
      },
      {
        "question_number": "30",
        "question": "With regard to anal canal neoplasms, which of the following statements is false?",
        "choices": [
          "A. Most anal melanomas are not diagnosed until they have reached an advanced stage.",
          "B. The overall 5-year survival for a patient with anal melanoma is 20%.",
          "C. Anal melanomas and squamous cell carcinomas are similar in that they are both highly sensitive to chemotherapy and radiation.",
          "D. Bowen’s disease is a squamous cell carcinoma in situ that does not penetrate the basement membrane.",
          "E. Perianal Paget’s disease may be an extension from a visceral carcinoma."
        ],
        "answer": "C"
      },
      {
        "question_number": "31",
        "question": "Which of the following statements is not true regarding internal hemorrhoids?",
        "choices": [
          "A. Internal hemorrhoids are varicosities of the inferior hemorrhoidal plexus.",
          "B. The symptoms are bleeding, prolapse, and mucoid discharge.",
          "C. They are classified based on the degree of prolapse.",
          "D. Third-degree hemorrhoids must be manually reduced.",
          "E. Fourth-degree hemorrhoids are irreducible."
        ],
        "answer": "A"
      },
      {
        "question_number": "32",
        "question": "Which of the following statements is true regarding anorectal anatomy?",
        "choices": [
          "A. The anal canal extends from the anorectal ring to the anal verge and is 8 to 10 cm in length.",
          "B. The internal anal sphincter is a continuation of the puborectalis muscle.",
          "C. The dentate line marks the transition from columnar to squamous epithelium.",
          "D. The external anal sphincter is composed of smooth muscle and is under voluntary control.",
          "E. The nerve supply of the anal canal above the dentate line is from the inferior rectal nerves."
        ],
        "answer": "C"
      },
      {
        "question_number": "33",
        "question": "What is the most common cause of anal fissure?",
        "choices": [
          "A. Previous anal surgery",
          "B. Trauma from passage of hard stool",
          "C. Anal intercourse",
          "D. Crohn’s disease",
          "E. Tuberculosis"
        ],
        "answer": "B"
      },
      {
        "question_number": "34",
        "question": "Which of the following is true concerning pilonidal cysts?",
        "choices": [
          "A. They occur more commonly in women than in men.",
          "B. Most of these cysts contain hair.",
          "C. They are of congenital origin.",
          "D. Most of them are located in the perianal area.",
          "E. Treatment may include excision and primary closure."
        ],
        "answer": "E"
      },
      {
        "question_number": "35",
        "question": "Which of the following is true about fecal incontinence?",
        "choices": [
          "A. Women are more commonly affected.",
          "B. It occurs in 5% of the general population.",
          "C. Overflow incontinence can occur from fecal impaction.",
          "D. Sacral nerve stimulation is no longer an option.",
          "E. Childbirth is not a risk factor."
        ],
        "answer": "C"
      }
    ],
    "Chapter 24: Spleen": [
      {
        "question_number": "1",
        "question": "Which of the following embryologic functions of the spleen is present in adult life?",
        "choices": [
          "A. Erythropoiesis",
          "B. Granulopoiesis",
          "C. Lymphopoiesis",
          "D. Thrombopoiesis",
          "E. Monocytopoiesis"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "The splenic artery typically arises from which arterial branch?",
        "choices": [
          "A. Hepatic artery",
          "B. Left renal artery",
          "C. Celiac trunk",
          "D. Superior mesenteric artery",
          "E. Inferior mesenteric artery"
        ],
        "answer": "C"
      },
      {
        "question_number": "3",
        "question": "Which of the following statements about the immunologic function of the spleen is true?",
        "choices": [
          "A. The spleen has a primary role in the development of T and B lymphocytes.",
          "B. Phagocytosis is the least important function of the spleen.",
          "C. IgG opsonization is most effective in clearing well-encapsulated organisms from the bloodstream.",
          "D. Splenic phagocytosis requires IgG, complement, and tuftsin.",
          "E. The spleen plays a major role in the production of opsonizing antibodies."
        ],
        "answer": "D"
      },
      {
        "question_number": "4",
        "question": "Which of the following statements about the clinical manifestations of hypersplenism is false?",
        "choices": [
          "A. Thrombocytopenia and leukopenia are less commonly associated with hypersplenism.",
          "B. Splenomegaly is always present in hypersplenism.",
          "C. The bone marrow is hyperplastic.",
          "D. Correction of the cytopenia follows splenectomy.",
          "E. Hemolysis is always present."
        ],
        "answer": "E"
      },
      {
        "question_number": "5",
        "question": "Which one of the following statements concerning the management of idiopathic thrombocytopenic purpura (ITP) is true?",
        "choices": [
          "A. Most children require splenectomy.",
          "B. Most adults achieve lasting remission with steroid therapy alone.",
          "C. A response to splenectomy can be expected in only a few cases.",
          "D. Splenectomy is indicated in adults with ITP for at least 1 year that is not responsive to medical management.",
          "E. If bleeding is associated with ITP, fresh-frozen plasma should be given."
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "Splenectomy is a therapeutic option in all of the following disorders except:",
        "choices": [
          "A. Sickle cell disease",
          "B. Felty syndrome",
          "C. Hairy cell leukemia",
          "D. Hereditary spherocytosis",
          "E. Thalassemia major"
        ],
        "answer": "E"
      },
      {
        "question_number": "7",
        "question": "With regard to thrombotic thrombocytopenic purpura (TTP), which statement is correct?",
        "choices": [
          "A. Splenectomy is not a viable option.",
          "B. The primary abnormality lies in the platelets themselves.",
          "C. It is typically associated with intravascular hemolysis, thrombocytopenia, fever, and neurologic and renal dysfunction.",
          "D. It is best treated with transfusions of platelets and fresh-frozen plasma.",
          "E. Splenectomy should be performed before plasmapheresis."
        ],
        "answer": "C"
      },
      {
        "question_number": "8",
        "question": "The best preoperative test to determine whether a patient with congenital hemolytic anemia will respond to splenectomy is:",
        "choices": [
          "A. Complete blood count with peripheral smear",
          "B. Determination of platelet-associated IgG",
          "C. Determination of red cell survival with chromium 51–labeled red blood cells",
          "D. Determination of serum haptoglobin level",
          "E. CT scan"
        ],
        "answer": "C"
      },
      {
        "question_number": "9",
        "question": "Which of the following statements about splenectomy for staging of Hodgkin lymphoma is true?",
        "choices": [
          "A. It is useful in determining the prognosis.",
          "B. It can influence therapy in up to 30% of patients.",
          "C. Splenic hilar lymph nodes should not be removed at the time of splenectomy.",
          "D. Complications such as overwhelming postsplenectomy sepsis (OPSS) are rare.",
          "E. Computed tomography (CT) can accurately predict splenic involvement."
        ],
        "answer": "B"
      },
      {
        "question_number": "10",
        "question": "Which of the following is true about splenic cysts?",
        "choices": [
          "A. Parasitic cysts are usually due to infestation with Plasmodium falciparum.",
          "B. Epidermoid cysts usually have a calcified wall.",
          "C. The risk for rupture or hemorrhage of a pseudocyst larger than 4 cm is high enough to warrant surgery.",
          "D. Traumatic pseudocysts should be drained percutaneously.",
          "E. Marsupialization is the procedure of choice."
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "Which of the following statements about splenic abscess is true?",
        "choices": [
          "A. The abscesses are often multiple.",
          "B. The most common cause is infective endocarditis.",
          "C. Most patients present with left upper quadrant pain and tenderness.",
          "D. The organism most commonly cultured from a splenic abscess is Bacteroides fragilis.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "12",
        "question": "In which of the following patients is splenectomy indicated?",
        "choices": [
          "A. A 40-year-old with sickle cell anemia who has had a stroke",
          "B. A 20-year-old with hereditary elliptocytosis",
          "C. A patient with pyruvate kinase deficiency",
          "D. A 30-year-old with thalassemia intermedia and a hemoglobin value of 8 g/dL",
          "E. A patient with G6PD deficiency"
        ],
        "answer": "D"
      },
      {
        "question_number": "13",
        "question": "A 23-year-old woman is seen in the emergency department with abdominal pain. A CT scan of the abdomen reveals a 2-cm benign-appearing splenic mass with central calcifica tion. What is the most appropriate management?",
        "choices": [
          "A. Splenectomy",
          "B. Needle aspiration with cytologic analysis",
          "C. Repeat CT in 6 months",
          "D. Core biopsy with ultrasound guidance",
          "E. Splenorrhaphy"
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "When compared with open splenectomy, laparoscopic splenectomy for ITP is associated with:",
        "choices": [
          "A. A higher complication rate",
          "B. A higher rate of missed accessory spleens",
          "C. A shorter length of hospital stay",
          "D. Decreased cost",
          "E. Prolonged recovery time"
        ],
        "answer": "C"
      },
      {
        "question_number": "15",
        "question": "Which of the following statements about splenic artery aneurysms is true?",
        "choices": [
          "A. They are more common in men than in women.",
          "B. They account for 10% of all visceral artery aneurysms.",
          "C. They are usually asymptomatic.",
          "D. They most commonly occur in the splenic hilum.",
          "E. Splenectomy is not a treatment option."
        ],
        "answer": "C"
      },
      {
        "question_number": "16",
        "question": "In which patient is OPSS most likely to occur?",
        "choices": [
          "A. An 18-year-old who had a splenectomy for trauma",
          "B. A 15-year-old who had a splenectomy for hereditary spherocytosis",
          "C. A 10-year-old who had a splenectomy for sickle cell anemia",
          "D. A 5-year-old who had a splenectomy for thalassemia major",
          "E. A 2-year-old who had a splenectomy for Gaucher disease"
        ],
        "answer": "D"
      },
      {
        "question_number": "17",
        "question": "Which of the following statements about splenosis is correct?",
        "choices": [
          "A. It usually presents with symptoms referable to multiple splenic implants.",
          "B. It may protect against OPSS.",
          "C. It may be diagnosed by liver-spleen scan or CT.",
          "D. All of the above.",
          "E. A and C."
        ],
        "answer": "D"
      }
    ],
    "Chapter 25: Liver, Biliary, and Gallbladder": [
      {
        "question_number": "1",
        "question": "Which of the following is true regarding liver anatomy?",
        "choices": [
          "A. The caudate lobe (segment 1) lies between the right and middle hepatic veins.",
          "B. The middle hepatic vein divides the right and left lobes.",
          "C. The right hepatic vein is responsible for drainage from the anterior segments of the right lobe of the liver.",
          "D. The left hepatic vein divides the left lobe into the medial and lateral segments.",
          "E. There are three hepatic lobes."
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "A 35-year-old woman is found to have an incidental right adrenal mass and is scheduled for an adrenalectomy. During dissection, the right adrenal vein is injured. Into what vessel does the right adrenal vein drain?",
        "choices": [
          "A. Splenic vein",
          "B. Inferior vena cava (IVC)",
          "C. Right hepatic vein",
          "D. Left renal vein",
          "E. Superior mesenteric vein"
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "Which of the following is true concerning the hepatic circulation?",
        "choices": [
          "A. The portal vein supplies 50% of the blood and 70% of the oxygen to the liver.",
          "B. Portal venous pressure increases with inspiration.",
          "C. The right hepatic artery originates from the gastroduo denal artery in 20% of the population.",
          "D. The portal vein typically lies anterior to the hepatic artery and common bile duct.",
          "E. Increased hepatic arterial blood flow compensates for a decrease in portal venous flow."
        ],
        "answer": "E"
      },
      {
        "question_number": "4",
        "question": "With regard to liver regeneration, which of the following is true?",
        "choices": [
          "A. Human liver regeneration is a complex process of cellular hyperplasia and hypertrophy.",
          "B. The remnant liver grows to its original size by 1 year.",
          "C. Hepatocyte regeneration is stimulated by insulin, glucagon, and epidermal growth factor.",
          "D. Biliary cells and endothelial cells do not regenerate.",
          "E. Most liver regeneration occurs within the first 6 weeks of resection."
        ],
        "answer": "C"
      },
      {
        "question_number": "5",
        "question": "Which of the following is not a role of Kupffer cells?",
        "choices": [
          "A. Phagocytosis of immune complexes",
          "B. Endotoxin inactivation",
          "C. Plasma protein synthesis",
          "D. Bilirubin secretion",
          "E. Release of cytokines, such as interleukin-1 (IL-1), IL-6, and tumor necrosis factor (TNF)"
        ],
        "answer": "C"
      },
      {
        "question_number": "6",
        "question": "An 85-year-old man with a history of hypertension and hyperlipidemia was found to have an unruptured brain aneurysm and underwent endovascular coiling. Postoperatively, he was confused and combative and fell out of bed. His labs are notable for a hemoglobin of 6.2 g/dL and an international normalized ratio (INR) of 3.2. A Foley catheter was placed and drained 50 mL of dark urine. His physical examination is significant for scleral icterus and an abdominal bruit. What is the most appropriate next step in the management of this patient?",
        "choices": [
          "A. Upper endoscopy",
          "B. Colonoscopy",
          "C. Transfusion of packed red blood cells and vitamin K",
          "D. Computed tomography (CT) of the abdomen and pelvis",
          "E. Angiography"
        ],
        "answer": "C"
      },
      {
        "question_number": "7",
        "question": "Which of the following coagulation factors is not synthesized in the liver?",
        "choices": [
          "A. Factor II",
          "B. Factor V",
          "C. Factor VII",
          "D. Factor VIII",
          "E. Factor XI"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Which of the following statements about acute liver failure is not true?",
        "choices": [
          "A. Fulminant hepatic failure may develop within 8 weeks of initial symptoms.",
          "B. Cerebral edema is the most common cause of death in patients with fulminant hepatic failure.",
          "C. Wilson disease is not a cause of acute liver failure.",
          "D. Orthotopic liver transplantation may be indicated if there is no improvement after 48 h.",
          "E. Hypoglycemia is often a contributing factor to the encephalopathy."
        ],
        "answer": "C"
      },
      {
        "question_number": "9",
        "question": "A 35-year-old woman is admitted to the hospital with a pyogenic liver abscess after an episode of diverticulitis. Which of the following statements about her abscess is true?",
        "choices": [
          "A. The abscess is most likely polymicrobial and may contain both anaerobes and aerobes.",
          "B. Escherichia coli is the most common anaerobe cultured from pyogenic abscesses.",
          "C. Percutaneous drainage and intravenous antibiotics have a cure rate of less than 75%.",
          "D. It is most commonly located in the left lobe of the liver.",
          "E. Open surgical drainage is rarely required."
        ],
        "answer": "A"
      },
      {
        "question_number": "10",
        "question": "Which of the following is true about echinococcal cysts?",
        "choices": [
          "A. They are most commonly seen in the right lobe of the liver.",
          "B. Casoni’s test is highly sensitive.",
          "C. Surgical therapy should be preceded by a minimum of 2 months of albendazole.",
          "D. Percutaneous aspiration is a viable diagnostic and therapeutic procedure.",
          "E. Scolicidal agents include hypertonic saline and povidone-iodine."
        ],
        "answer": "E"
      },
      {
        "question_number": "11",
        "question": "A 35-year-old female presents to your office for evaluation of an incidental liver lesion on CT. On physical exam, she has a palpable liver with a smooth edge and no other findings. She denies any prior medical history other than being on oral contraceptive pills since the age of 19. All of the following would be an appropriate next step in the workup of a hepatic adenoma except:",
        "choices": [
          "A. α-Fetoprotein (AFP)",
          "B. Discontinuation of oral contraceptives",
          "C. Surgical resection for lesions smaller than 5 cm",
          "D. Triphasic CT scan of the liver",
          "E. Regular follow-up with triphasic CT and AFP"
        ],
        "answer": "C"
      },
      {
        "question_number": "12",
        "question": "A 55-year-old woman is seen in the surgical clinic for an incidental 6-cm right hepatic lesion seen on a CT scan. The patient denies any abdominal pain, nausea, vomiting, or change in bowel habits. Her physical examination is unremarkable. Which of the following is true regarding her condition?",
        "choices": [
          "A. The lesion should be resected because of a 5% to 10% risk for malignant transformation.",
          "B. Magnetic resonance imaging (MRI) would show an isointense lesion with a central scar on T1-weighted imaging.",
          "C. The patient should be encouraged to stop her oral contraceptive pills if she is taking them.",
          "D. A core biopsy should be performed because of the lesion’s large size.",
          "E. This is the most common benign tumor of the liver."
        ],
        "answer": "B"
      },
      {
        "question_number": "13",
        "question": "Which of the following is not a risk factor for the development of hepatocellular carcinoma (HCC)?",
        "choices": [
          "A. Hepatitis B virus (HBV) infection",
          "B. Hepatitis C virus (HCV) infection",
          "C. Alcohol",
          "D. Cirrhosis",
          "E. Non-alcoholic steatohepatitis (NASH)"
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "A 55-year-old man with a long-standing history of HCV cirrhosis has a 3-cm peripherally enhancing mass on a CT scan with central washout concerning for HCC. Which of the following statements is true of the Milan criteria for orthotopic liver transplantation?",
        "choices": [
          "A. A patient with one 4-cm lesion and two 2-cm lesions would qualify.",
          "B. A patient with four 2-cm lesions would qualify.",
          "C. A patient with two 4-cm lesions would qualify.",
          "D. A patient with three 3-cm lesions would qualify.",
          "E. Portal vein thrombosis is an absolute contraindication to transplant."
        ],
        "answer": "D"
      },
      {
        "question_number": "15",
        "question": "A 65-year-old man with a history of colon cancer presents with a newly diagnosed hepatic mass 2 years after his initial diagnosis. Workup shows a single 2-cm lesion in the left lobe of his liver with no evidence of other metastatic disease. Which of the following is true regarding his condition?",
        "choices": [
          "A. He has an approximately 50% 5-year survival rate after surgical resection.",
          "B. There is no role for neoadjuvant chemotherapy.",
          "C. Synchronous metastasis carries a worse prognosis than metachronous metastasis.",
          "D. Extrahepatic disease is an absolute contraindication to hepatic resection.",
          "E. Anatomic resection is superior to wedge resection."
        ],
        "answer": "A"
      },
      {
        "question_number": "16",
        "question": "Which statement regarding portal hypertension is true?",
        "choices": [
          "A. Presinusoidal hypertension is caused by hepatic parenchymal disease.",
          "B. Sinusoidal hypertension is caused by thrombosis of the hepatic veins.",
          "C. Child-Turcotte-Pugh score is based on five clinical measures of liver disease.",
          "D. Postsinusoidal hypertension is caused by thrombosis of the portal vein.",
          "E. Transjugular intrahepatic portosystemic shunt (TIPS) is first-line therapy for the management of esophageal variceal bleeding."
        ],
        "answer": "C"
      },
      {
        "question_number": "17",
        "question": "Which of the following is true regarding cavernous hemangiomas of the liver?",
        "choices": [
          "A. They are most commonly located in the right lobe of the liver.",
          "B. Lesions larger than 4 cm should be resected because of the high risk for spontaneous rupture.",
          "C. MRI shows peripheral nodular enhancement on T1-weighted images.",
          "D. Enucleation is not recommended because of the high risk for bleeding.",
          "E. The risk of malignancy is 50%."
        ],
        "answer": "A"
      },
      {
        "question_number": "18",
        "question": "A 35-year-old woman is admitted for symptomatic cholelithiasis. Her total bilirubin is 3.5 mg/dL. Endoscopic retrograde cholangiopancreatography (ERCP) is performed, and a stone is removed from her common bile duct. She continues to have right upper quadrant pain, and an ultrasound shows a dilated common bile duct. A CT scan of her abdomen is obtained (Fig. 25.1). What is the next best step in the management of this patient?",
        "choices": [
          "A. Repeat ERCP",
          "B. Percutaneous transhepatic cholangiography (PTC)",
          "C. Cholecystectomy",
          "D. Cholecystectomy and bile duct exploration",
          "E. Hepatic resection"
        ],
        "answer": "E"
      },
      {
        "question_number": "19",
        "question": "A 55-year-old woman complains of flushing and diarrhea. The liver is noted to be palpable on physical examination. The results of liver function tests are normal. A CT scan shows multiple lesions in the right and left lobes of the liver, and the 24-h urinary 5-hydroxyindoleacetic acid (5-HIAA) level is elevated. Which of the following is true?",
        "choices": [
          "A. The primary tumor is likely in the right colon.",
          "B. Somatostatin scintigraphy is the most sensitive test to identify extrahepatic disease.",
          "C. A biopsy of the liver lesion is required to confirm the diagnosis.",
          "D. Resection is recommended only if all gross disease can be removed.",
          "E. Combination chemotherapy can be curative."
        ],
        "answer": "B"
      },
      {
        "question_number": "20",
        "question": "A 45-year-old woman with a history of irritable bowel syndrome presents to the emergency department for severe right upper quadrant pain radiating to her back with nausea and vomiting. Which of the following is the next best step in her evaluation?",
        "choices": [
          "A. Liver function tests",
          "B. Abdominal ultrasound",
          "C. CT scan",
          "D. Serum amylase and lipase",
          "E. HIDA scan"
        ],
        "answer": "A"
      },
      {
        "question_number": "21",
        "question": "A patient with calculous cholecystitis underwent a laparo scopic cholecystectomy. The cystic duct was clipped and transected. Cholangiogram was normal. On postoperative day 2, she had increasing abdominal pain and was found to be tachycardic. Her total bilirubin was 2.5 mg/dL, and her alkaline phosphatase was 105 U/L. Which of the following is the most likely diagnosis?",
        "choices": [
          "A. Retained stone",
          "B. Cystic duct stump leak",
          "C. Injury to a duct of Luschka",
          "D. Common bile duct stricture",
          "E. Common bile duct transection"
        ],
        "answer": "C"
      },
      {
        "question_number": "22",
        "question": "A 75-year-old man presents with a diagnosis of gallstone pancreatitis. He is being treated with intravenous fluids, pain control, and bowel rest. His symptoms resolve in 48 h. An ultrasound of the gallbladder reveals multiple small stones. A magnetic resonance cholangiopancreatography (MRCP) is performed and is negative. What is the most appropriate management for this patient?",
        "choices": [
          "A. Laparoscopic cholecystectomy after complete resolution of symptoms",
          "B. ERCP with sphincterotomy",
          "C. Laparoscopic cholecystectomy with cholangiogram",
          "D. Medical management",
          "E. Laparoscopic cholecystectomy with common bile duct exploration"
        ],
        "answer": "C"
      },
      {
        "question_number": "23",
        "question": "With regard to cholangiocarcinoma, which of the following is true?",
        "choices": [
          "A. Primary sclerosing cholangitis is a risk factor.",
          "B. Tumors in the distal third of the common bile duct are associated with the worst prognosis.",
          "C. Complete surgical resection with negative margins is usually possible.",
          "D. Most tumors are squamous cell carcinomas.",
          "E. The tumor is responsive to radiation and chemotherapy."
        ],
        "answer": "A"
      },
      {
        "question_number": "24",
        "question": "Which of the following is true concerning the blood supply of the gallbladder?",
        "choices": [
          "A. The cystic artery always arises from the right hepatic artery.",
          "B. A replaced right hepatic artery is usually found posterior to the portal vein.",
          "C. The cystic artery is found within the triangle of Calot.",
          "D. In 20% of the population, a second cystic artery is present.",
          "E. The cystic artery usually runs posterior to the cystic duct."
        ],
        "answer": "C"
      },
      {
        "question_number": "25",
        "question": "A 35-year-old woman is admitted to the hospital with a diagnosis of ascending cholangitis. She is treated with antibiotics and undergoes an emergent ERCP, which reveals pus exiting the ampulla of Vater. A stone is extracted from her distal common bile duct. She subsequently undergoes an uncomplicated laparoscopic cholecystectomy. Which statement regarding her condition is true?",
        "choices": [
          "A. Cholangitis is due to a biliary obstruction in the presence of bacteria in the bile.",
          "B. The most common organism cultured from the bile of these patients is Staphylococcus aureus.",
          "C. Charcot’s triad (fever, jaundice, and left upper quadrant pain) is present in 95% of patients with cholangitis.",
          "D. Reynolds pentad is fever, jaundice, right upper quadrant pain, altered mental status, and hypotension.",
          "E. If ERCP had failed, a laparoscopic cholecystectomy with bile duct exploration would have been indicated."
        ],
        "answer": "D"
      },
      {
        "question_number": "26",
        "question": "A 37-year-old woman with a history of intravenous drug use presents to the emergency department with a 3-day history of right upper quadrant pain. Her physical examination is remarkable for scleral icterus. She has a fever of 102.5°F, and a white blood cell count of 15,000/mm3. Liver function tests show a total bilirubin of 4.5 mg/dL, an aspartate transaminase (AST) of 150 IU/L, an alanine transaminase (ALT) of 120 IU/L, and an alkaline phosphatase of 450 IU/L. An ultrasound of the right upper quadrant shows a normal-appearing gallbladder and a 9-mm common bile duct. Which of the following is most likely responsible for her symptoms?",
        "choices": [
          "A. Primary sclerosing cholangitis",
          "B. Acquired immune deficiency syndrome (AIDS)-related cholangiopathy",
          "C. Mirizzi’s syndrome",
          "D. Acute cholecystitis",
          "E. Primary biliary cirrhosis"
        ],
        "answer": "B"
      },
      {
        "question_number": "27",
        "question": "With regard to primary sclerosing cholangitis, which of the following is true?",
        "choices": [
          "A. It affects women more than men.",
          "B. It is not associated with inflammatory bowel disease.",
          "C. The disease has a predilection for the extrahepatic ducts.",
          "D. The only effective treatment is liver transplantation.",
          "E. Medical therapy with ursodeoxycholic acid and steroids is highly effective."
        ],
        "answer": "D"
      },
      {
        "question_number": "28",
        "question": "A 55-year-old obese woman with a history of diabetes mellitus and hypertension is admitted to the surgical intensive care unit with pneumonia and sepsis. She requires mechan ical ventilation and vasopressor support. She is started on TPN. Ten days after admission, she has a fever of 103°F. Her white blood cell count is 18,000/mm3, her bilirubin is 2.5 mg/dL, and her alkaline phosphatase is 300 IU/L. Physical examination of the abdomen is benign. A CT scan of the abdomen shows a distended gallbladder with a thickened wall and pericholecystic fluid. Which of the following is the best therapeutic option?",
        "choices": [
          "A. Emergent laparoscopic cholecystectomy",
          "B. Emergent open cholecystectomy",
          "C. Percutaneous cholecystostomy tube placement",
          "D. ERCP with sphincterotomy",
          "E. Broad-spectrum antibiotics"
        ],
        "answer": "C"
      },
      {
        "question_number": "29",
        "question": "With regard to porcelain gallbladder, which of the following statements is true?",
        "choices": [
          "A. It represents calcification of the gallbladder wall.",
          "B. It is associated with a 50% incidence of gallbladder cancer.",
          "C. Elective cholecystectomy is recommended.",
          "D. It is most often found in women.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "30",
        "question": "With regard to gallbladder carcinoma, which of the following is true?",
        "choices": [
          "A. It occurs most often in men.",
          "B. The 5-year survival rate is 50%.",
          "C. Cholelithiasis is a major risk factor.",
          "D. Adenocarcinoma is a rare histologic type.",
          "E. Radical cholecystectomy for T1b lesions provides excellent long-term results."
        ],
        "answer": "C"
      }
    ],
    "Chapter 26: Pancreas": [
      {
        "question_number": "1",
        "question": "Which of the following hormones is not secreted by the pancreas?",
        "choices": [
          "A. Glucagon",
          "B. Insulin",
          "C. Somatostatin",
          "D. Gastrin",
          "E. Pancreatic polypeptide"
        ],
        "answer": "D"
      },
      {
        "question_number": "2",
        "question": "Regarding the exocrine secretions of the pancreas, which of the following is a false statement?",
        "choices": [
          "A. Protein and fat in the duodenum stimulate pancreatic enzyme secretion.",
          "B. Cholecystokinin (CCK) stimulates acinar cells to secrete enzymes and proenzymes.",
          "C. Vasoactive intestinal peptide and secretin stimulate the secretion of water and electrolytes from the pancreas.",
          "D. A rise in the duodenal pH above 4.5 inhibits secretin release.",
          "E. Trypsin inhibitor is secreted by the acinar cells."
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "All of the following are potential complications of pan creas divisum except:",
        "choices": [
          "A. Chronic pancreatitis",
          "B. Acute pancreatitis",
          "C. Pancreatic adenocarcinoma",
          "D. Obstructive jaundice",
          "E. Pancreatic pseudocyst"
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "Which of the following is an incorrect statement about annular pancreas?",
        "choices": [
          "A. It results from a failure of the ventral bud to rotate.",
          "B. Symptoms do not occur in adults.",
          "C. It may be associated with duodenal atresia.",
          "D. The preferred treatment is a duodenojejunostomy.",
          "E. It may be associated with pancreatitis."
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "Which of the following is not a risk factor for pancreatitis?",
        "choices": [
          "A. Alcohol",
          "B. Gallstones",
          "C. Hyperlipidemia",
          "D. Hypocalcemia",
          "E. Azathioprine"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "A 45-year-old man is admitted to the hospital with a diagnosis of gallstone pancreatitis. On arrival to the emergency department, his pulse is 120 beats/min, his white blood cell (WBC) count is 18,000/mm3, his serum glucose is 250 mg/dL, and his aspartate transaminase (AST) is 250 U/L. After 48 h of treatment, his pulse remains at 125 beats/min, hematocrit is 35%, blood urea nitrogen (BUN) is 40 mg/dL, calcium is 7.9 mg/dL, arterial Po2 is 60 mmHg, base deficit is 5 mEq/L, and his estimated fluid sequestration is 7 L. The mortality risk for this patient is:",
        "choices": [
          "A. 10%",
          "B. 20%",
          "C. 30%",
          "D. 40%",
          "E. 50%"
        ],
        "answer": "E"
      },
      {
        "question_number": "7",
        "question": "An 85-year-old man with a history of colon cancer is admitted with a diagnosis of pancreatitis. He has no history of alcohol abuse. His medications include a statin, aspirin, and furosemide. An ultrasound of the right upper quadrant shows a normal-appearing gallbladder and a common bile duct that is 4 mm in diameter. Which of the following is true?",
        "choices": [
          "A. The most likely etiology of the pancreatitis is a gallstone that has already passed.",
          "B. The next step is a computed tomography (CT) scan with pancreatic protocol to rule out pancreatic cancer.",
          "C. The next step should be endoscopic retrograde cholan giopancreatography (ERCP) for diagnosis and possible therapy.",
          "D. The patient should undergo a laparoscopic cholecystectomy during the same admission.",
          "E. His pancreatitis is most likely a result of his diuretic."
        ],
        "answer": "A"
      },
      {
        "question_number": "8",
        "question": "Which of the following is not true of CT scans of the pancreas?",
        "choices": [
          "A. A dynamic contrast-enhanced CT scan is useful to assess the degree of pancreatic necrosis.",
          "B. CT-guided aspiration for culture is performed routinely for any peripancreatic fluid collection.",
          "C. Gas bubbles seen on CT in an area of peripancreatic fluid are an indication for debridement.",
          "D. Patients with > 50% necrosis have mortality rates as high as 25%.",
          "E. A CT scan of the abdomen is not needed at the time of admission in patients with mild pancreatitis."
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "A 35-year-old man presents with acute pancreatitis. After 4 days, he is still having significant abdominal pain, nausea, and emesis. He also complains of early satiety. A CT scan of the abdomen is obtained, and a 3-cm pancreatic pseudocyst is seen in the head of the pancreas. What is the most appropriate management of this finding?",
        "choices": [
          "A. CT-guided aspiration",
          "B. Percutaneous drain placement",
          "C. Endoscopic cystogastrostomy",
          "D. Laparoscopic cystogastrostomy",
          "E. Observation"
        ],
        "answer": "E"
      },
      {
        "question_number": "10",
        "question": "The patient in Question 9 is evaluated again after 6 weeks. He is still having significant symptoms. A repeat CT scan shows the pseudocyst has enlarged to 6 cm, and there is evidence of a gastric outlet obstruction. What is the most appropriate management?",
        "choices": [
          "A. Percutaneous drainage",
          "B. Operative cystogastrostomy",
          "C. Endoscopic cystogastrostomy",
          "D. Gastrojejunostomy",
          "E. Observation"
        ],
        "answer": "C"
      },
      {
        "question_number": "11",
        "question": "Which of the following statements about the surgical management of chronic pancreatitis is true?",
        "choices": [
          "A. Celiac ganglionectomy results in significant long-term pain relief.",
          "B. Endoscopic sphincterotomy and stone extraction is more effective than surgery for relief of pain.",
          "C. A lateral pancreaticojejunostomy (Puestow procedure) has good results for pain relief, but the mortality rate is up to 10%.",
          "D. Pancreaticoduodenectomy is the procedure of choice for a dilated pancreatic duct with an inflammatory mass in the head of the pancreas.",
          "E. A distal pancreatectomy can be used when the disease is confined to the head of the pancreas."
        ],
        "answer": "D"
      },
      {
        "question_number": "12",
        "question": "A 55-year-old woman is found to have an incidental pancreatic mass on a CT scan obtained for another reason. The lesion is 3 cm in size and located in the body of the pancreas. It has a central scar and some microcystic changes. The pancreatic duct is not dilated. Which of the following statements about the lesion is not correct?",
        "choices": [
          "A. The tumor has a high malignant potential.",
          "B. It occurs more often in women.",
          "C. Surgical resection is indicated.",
          "D. The typical patient is in the sixth or seventh decade.",
          "E. These tumors are highly vascular."
        ],
        "answer": "A"
      },
      {
        "question_number": "13",
        "question": "A 75-year-old woman with a history of chronic pancreatitis presents to your office with complaints of vague abdominal pain and jaundice. A CT scan of the abdomen shows a mass in the head of the pancreas with a dilated pancreatic duct. Which of the following is true?",
        "choices": [
          "A. Endoscopic ultrasound (EUS)-guided biopsy is highly sensitive and specific.",
          "B. Her tumor is likely to be a squamous cell carcinoma.",
          "C. A negative biopsy would rule out cancer.",
          "D. A biliary stent should be placed preoperatively to relieve the jaundice.",
          "E. ERCP is useful to assess for vascular invasion."
        ],
        "answer": "A"
      },
      {
        "question_number": "14",
        "question": "A 65-year-old man presents with a history of weight loss and newly diagnosed diabetes mellitus. His CT scan shows a mass in the tail of the pancreas with associated atrophy of the body and head. There is no evidence of metastatic disease. Which of the following statements is true?",
        "choices": [
          "A. This is the most common location of pancreatic adenocarcinoma.",
          "B. Pancreatic cancer at this location has a better prognosis than a tumor in the head of the pancreas.",
          "C. His prognosis depends on the size of the tumor and the degree of differentiation.",
          "D. A distal pancreatectomy with splenectomy is indicated.",
          "E. The role of adjuvant chemotherapy is controversial."
        ],
        "answer": "D"
      },
      {
        "question_number": "15",
        "question": "A 50-year-old woman is seen in your office for complaints of fatigue and diarrhea. She has a history of nephrolithiasis and peptic ulcer disease. You suspect Zollinger-Ellison syndrome (ZES). Which of the following is not a part of the diagnostic workup?",
        "choices": [
          "A. Serum calcium level",
          "B. Gastrin level",
          "C. Secretin stimulation test",
          "D. Somatostatin receptor scintigraphy (SRS)",
          "E. Genetic testing"
        ],
        "answer": "E"
      },
      {
        "question_number": "16",
        "question": "With regard to insulinoma, which of the following is true?",
        "choices": [
          "A. Approximately 10% are malignant.",
          "B. The diagnosis is confirmed by a low serum glucose, high insulin level, and relief of symptoms after glucose administration.",
          "C. Most tumors are located in the head of the pancreas.",
          "D. Enucleation of the tumor is contraindicated.",
          "E. It is rarely associated with multiple endocrine neoplasia (MEN)."
        ],
        "answer": "B"
      },
      {
        "question_number": "17",
        "question": "A 45-year-old woman is found to have a mass in the tail of the pancreas. Further workup confirms the diagnosis of glucagonoma. Which of the following statements about her condition is false?",
        "choices": [
          "A. The tumor is usually larger than 3 cm at the time of diagnosis.",
          "B. The majority of tumors are malignant.",
          "C. The patient will likely present with hyperglycemia.",
          "D. Most patients have an associated skin rash called necrolytic migratory erythema.",
          "E. There is no role for cytoreductive surgery."
        ],
        "answer": "E"
      },
      {
        "question_number": "18",
        "question": "A 48-year-old man with a history of alcohol abuse presents with acute pancreatitis. This is his fourth such admission in the past 2 years. Which of the following is true?",
        "choices": [
          "A. Cholecystectomy should be performed before discharge to prevent further episodes.",
          "B. An ultrasound of the right upper quadrant should be performed to rule out gallstones as the cause.",
          "C. ERCP is indicated because of his recurrent episodes.",
          "D. He would benefit from a Puestow procedure.",
          "E. The patient has a high risk for pancreatic cancer."
        ],
        "answer": "B"
      },
      {
        "question_number": "19",
        "question": "A 50-year-old woman with a history of chronic pancreatitis presents with increasing abdominal pain and weight loss. A CT scan of the abdomen shows a large pseudocyst in the tail of the pancreas. What is the most appropriate management?",
        "choices": [
          "A. Distal pancreatectomy with splenectomy",
          "B. Endoscopic transgastric drainage",
          "C. Laparoscopic cystogastrostomy",
          "D. Percutaneous drainage",
          "E. Observation"
        ],
        "answer": "A"
      },
      {
        "question_number": "20",
        "question": "Which of the following statements about intraductal papillary mucinous neoplasm (IPMN) is false?",
        "choices": [
          "A. It occurs most commonly in women.",
          "B. A dilated pancreatic duct (>1 cm) is a high-risk feature for malignancy.",
          "C. The malignant potential of branch-duct IPMN is lower than that of main-duct IPMN.",
          "D. These lesions are premalignant.",
          "E. The lesions are usually located in the head of the pancreas."
        ],
        "answer": "A"
      }
    ]
  },
  "SECTION VII: SURGICAL SPECIALTIES": {
    "Chapter 27: Pediatric Surgery": [
      {
        "question_number": "1",
        "question": "Which of the following statements regarding the physiology of a neonate is false?",
        "choices": [
          "A. Neonates are obligate nose breathers until 3 to 6 months of age.",
          "B. Neonates are at high risk for dehydration because of their higher total body water content.",
          "C. Neonates have a larger surface-area-to-volume ratio.",
          "D. Anesthetic agents have a shorter half-life in neonates.",
          "E. The glomerular filtration rate (GFR) of a neonate is lower than that of an older child."
        ],
        "answer": "D"
      },
      {
        "question_number": "2",
        "question": "Which of the following is true of necrotizing enterocolitis (NEC)?",
        "choices": [
          "A. It is more common in full-term infants.",
          "B. It is characterized by pneumatosis intestinalis on plain abdominal radiographs.",
          "C. It is typically associated with a metabolic alkalosis.",
          "D. Broad-spectrum antibiotics are not indicated.",
          "E. It is not associated with enteral feedings."
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "An 8-week-old female has a 1-day history of nonbilious, projectile vomiting after every meal. On examination, the infant has a palpable mass in the right upper quadrant. An ultrasound confirms the diagnosis. After correction of the fluid and electrolyte abnormalities, which of the following is the most appropriate management?",
        "choices": [
          "A. Pyloric dilatation",
          "B. Pyloromyotomy",
          "C. Pyloroplasty",
          "D. Antrectomy",
          "E. Gastrojejunostomy"
        ],
        "answer": "B"
      },
      {
        "question_number": "4",
        "question": "Which of the following statements regarding malrotation is incorrect?",
        "choices": [
          "A. Infants usually present in the first month of life.",
          "B. An upper gastrointestinal (UGI) series is the gold standard for diagnosis.",
          "C. A “bird’s beak” appearance on a UGI series is pathognomonic.",
          "D. The Ladd’s procedure includes an appendectomy.",
          "E. The small intestine is placed on the right side of the abdomen, and the large intestine on the left."
        ],
        "answer": "C"
      },
      {
        "question_number": "5",
        "question": "Which of the following congenital anomalies of the gastrointestinal (GI) tract requires emergent surgical intervention?",
        "choices": [
          "A. Gastroschisis",
          "B. Omphalocele",
          "C. Duodenal atresia",
          "D. Jejunal atresia",
          "E. Meconium ileus"
        ],
        "answer": "A"
      },
      {
        "question_number": "6",
        "question": "The double-bubble sign on an abdominal radiograph is pathognomonic for:",
        "choices": [
          "A. Malrotation",
          "B. Jejunal atresia",
          "C. Duodenal atresia",
          "D. Ileal atresia",
          "E. Imperforate anus"
        ],
        "answer": "C"
      },
      {
        "question_number": "7",
        "question": "Which of the following statements about Hirschsprung’s disease is correct?",
        "choices": [
          "A. It affects boys and girls equally.",
          "B. It is caused by an absence of ganglion cells in Auerbach’s and Meissner’s plexuses.",
          "C. The rectum is spared in most cases.",
          "D. Anorectal manometry showing relaxation of the internal sphincter is diagnostic.",
          "E. A diverting colostomy is required before definitive repair in all cases."
        ],
        "answer": "B"
      },
      {
        "question_number": "8",
        "question": "Which of the following is the most common type of tracheoesophageal fistula (TEF)?",
        "choices": [
          "A. Esophageal atresia with a proximal fistula",
          "B. Esophageal atresia with a distal fistula",
          "C. Esophageal atresia with a proximal and distal fistula",
          "D. H-type fistula without atresia",
          "E. Esophageal atresia without fistula"
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "A 2-week-old infant has bilious emesis and abdominal distention. A contrast enema reveals a microcolon. Which of the following is the most likely diagnosis?",
        "choices": [
          "A. Duodenal atresia",
          "B. Ileal atresia",
          "C. Hirschsprung’s disease",
          "D. Malrotation",
          "E. Imperforate anus"
        ],
        "answer": "B"
      },
      {
        "question_number": "10",
        "question": "A 2-year-old boy presents to the emergency department with a history of intermittent, colicky abdominal pain. On physical examination, a sausage-shaped mass is felt in the right upper quadrant. The next best step is:",
        "choices": [
          "A. Plain abdominal films",
          "B. UGI series with small bowel follow-through",
          "C. CT scan of the abdomen",
          "D. Barium enema",
          "E. Colonoscopy"
        ],
        "answer": "D"
      },
      {
        "question_number": "11",
        "question": "The most common congenital diaphragmatic hernia (CDH) is:",
        "choices": [
          "A. A right-sided posterolateral defect",
          "B. A left-sided posterolateral defect",
          "C. An anterior defect",
          "D. A retrosternal defect",
          "E. A central defect"
        ],
        "answer": "B"
      },
      {
        "question_number": "12",
        "question": "A newborn with a CDH is in respiratory distress. Which of the following should be performed immediately?",
        "choices": [
          "A. Surgical repair",
          "B. Bag-mask ventilation",
          "C. Placement of a nasogastric tube",
          "D. Chest tube insertion",
          "E. Extracorporeal membrane oxygenation (ECMO)"
        ],
        "answer": "C"
      },
      {
        "question_number": "13",
        "question": "Which of the following statements about biliary atresia is incorrect?",
        "choices": [
          "A. It affects females more than males.",
          "B. It is the most common cause of neonatal jaundice.",
          "C. It is typically associated with other congenital anomalies.",
          "D. A percutaneous liver biopsy is the gold standard for diagnosis.",
          "E. A portoenterostomy (Kasai procedure) is the treatment of choice."
        ],
        "answer": "C"
      },
      {
        "question_number": "14",
        "question": "Which statement about Wilms tumor is true?",
        "choices": [
          "A. It is the most common intraabdominal tumor in children.",
          "B. It usually presents as a painful abdominal mass.",
          "C. Hematuria is a common finding.",
          "D. A preoperative biopsy is required for diagnosis.",
          "E. Surgical resection is the primary treatment."
        ],
        "answer": "E"
      },
      {
        "question_number": "15",
        "question": "Which statement is true of neuroblastoma?",
        "choices": [
          "A. It is the most common extracranial solid tumor in children.",
          "B. The majority of tumors arise in the chest.",
          "C. A calcified suprarenal mass is a classic finding on plain radiographs.",
          "D. Elevated levels of vanillylmandelic acid (VMA) and homovanillic acid (HVA) are diagnostic.",
          "E. Children older than 1 year have a better prognosis than younger children."
        ],
        "answer": "A"
      },
      {
        "question_number": "16",
        "question": "Which of the following statements regarding rhabdomyosarcoma is true?",
        "choices": [
          "A. It is the most common soft tissue sarcoma in children.",
          "B. The embryonal subtype has the worst prognosis.",
          "C. It is typically a painless, enlarging mass.",
          "D. Complete surgical excision is the treatment of choice.",
          "E. Lymph node metastases are uncommon."
        ],
        "answer": "A"
      },
      {
        "question_number": "17",
        "question": "Which statement about sacrococcygeal teratoma is false?",
        "choices": [
          "A. It is the most common germ cell tumor in neonates.",
          "B. The majority of tumors are malignant.",
          "C. It is more common in females.",
          "D. The diagnosis can be made prenatally with ultrasound.",
          "E. Surgical resection includes removal of the coccyx."
        ],
        "answer": "B"
      },
      {
        "question_number": "18",
        "question": "Which of the following is true regarding pediatric trauma?",
        "choices": [
          "A. Trauma is the leading cause of death in children older than 1 year.",
          "B. Head injury is the most common cause of death.",
          "C. The spleen is the most commonly injured solid organ.",
          "D. Nonoperative management of solid organ injuries is the standard of care.",
          "E. All of the above."
        ],
        "answer": "E"
      },
      {
        "question_number": "19",
        "question": "Which of the following is the most common cause of an intestinal obstruction in children between 6 months and 2 years of age?",
        "choices": [
          "A. Incarcerated inguinal hernia",
          "B. Intussusception",
          "C. Malrotation with midgut volvulus",
          "D. Meckel’s diverticulum",
          "E. Pyloric stenosis"
        ],
        "answer": "B"
      },
      {
        "question_number": "20",
        "question": "Which of the following is true of chest wall deformities in children?",
        "choices": [
          "A. Pectus excavatum is more common than pectus carinatum.",
          "B. Pectus excavatum is usually associated with respiratory and cardiac dysfunction.",
          "C. Pectus carinatum is more common in girls.",
          "D. Surgical correction of pectus excavatum is usually performed before age 2 years.",
          "E. The Nuss procedure is an open repair of pectus excavatum."
        ],
        "answer": "A"
      }
    ],
    "Chapter 28: Urology": [
      {
        "question_number": "1",
        "question": "A 25-year-old male presents with right scrotal pain. Which of the following is most likely to be absent if the diagnosis is epididymitis?",
        "choices": [
          "A. Prehn sign",
          "B. Cremasteric reflex",
          "C. Scrotal edema",
          "D. Fever",
          "E. Pyuria"
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "A patient presents with hematuria and left flank pain. A computed tomography (CT) scan of the abdomen and pelvis shows a 3-cm mass in the left kidney. Which of the following is the most likely diagnosis?",
        "choices": [
          "A. Renal cell carcinoma",
          "B. Transitional cell carcinoma",
          "C. Angiomyolipoma",
          "D. Oncocytoma",
          "E. Wilms tumor"
        ],
        "answer": "A"
      },
      {
        "question_number": "3",
        "question": "Which of the following is true regarding Fournier’s gangrene?",
        "choices": [
          "A. It is a polymicrobial infection.",
          "B. It is more common in women.",
          "C. The most common cause is a urinary tract infection.",
          "D. It is not associated with diabetes mellitus.",
          "E. Surgical debridement is not always necessary."
        ],
        "answer": "A"
      },
      {
        "question_number": "4",
        "question": "A 65-year-old male with a history of smoking presents with painless hematuria. What is the most likely diagnosis?",
        "choices": [
          "A. Renal cell carcinoma",
          "B. Bladder cancer",
          "C. Prostate cancer",
          "D. Urolithiasis",
          "E. Benign prostatic hyperplasia"
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "A 50-year-old male presents with a palpable scrotal mass. Which of the following is the most appropriate initial diagnostic test?",
        "choices": [
          "A. Urinalysis",
          "B. Serum tumor markers",
          "C. Scrotal ultrasound",
          "D. CT scan of the abdomen and pelvis",
          "E. Magnetic resonance imaging (MRI) of the scrotum"
        ],
        "answer": "C"
      },
      {
        "question_number": "6",
        "question": "Which of the following is the most common type of testicular cancer?",
        "choices": [
          "A. Seminoma",
          "B. Embryonal carcinoma",
          "C. Teratoma",
          "D. Choriocarcinoma",
          "E. Yolk sac tumor"
        ],
        "answer": "A"
      },
      {
        "question_number": "7",
        "question": "A 70-year-old male with a history of benign prostatic hyperplasia presents with urinary retention. Which of the following is the most appropriate initial management?",
        "choices": [
          "A. Suprapubic catheter placement",
          "B. Transurethral resection of the prostate (TURP)",
          "C. Alpha-blocker therapy",
          "D. 5-alpha-reductase inhibitor therapy",
          "E. Foley catheter placement"
        ],
        "answer": "E"
      },
      {
        "question_number": "8",
        "question": "Which of the following is a risk factor for prostate cancer?",
        "choices": [
          "A. Asian ethnicity",
          "B. Vasectomy",
          "C. High-fat diet",
          "D. Benign prostatic hyperplasia",
          "E. All of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "9",
        "question": "Which of the following is the most common site of metastasis for prostate cancer?",
        "choices": [
          "A. Lung",
          "B. Liver",
          "C. Brain",
          "D. Bone",
          "E. Adrenal gland"
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "A 40-year-old male presents with a new onset of erectile dysfunction. Which of the following is the most likely cause?",
        "choices": [
          "A. Psychogenic",
          "B. Vascular",
          "C. Neurogenic",
          "D. Hormonal",
          "E. Drug-induced"
        ],
        "answer": "A"
      }
    ],
    "Chapter 29: Gynecology": [
      {
        "question_number": "1",
        "question": "A 25-year-old female presents with a 2-day history of lower abdominal pain, fever, and vaginal discharge. On examination, she has cervical motion tenderness. What is the most likely diagnosis?",
        "choices": [
          "A. Appendicitis",
          "B. Ovarian torsion",
          "C. Pelvic inflammatory disease (PID)",
          "D. Ectopic pregnancy",
          "E. Ruptured ovarian cyst"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "Which of the following is the most common cause of PID?",
        "choices": [
          "A. Neisseria gonorrhoeae",
          "B. Chlamydia trachomatis",
          "C. Mycoplasma genitalium",
          "D. Trichomonas vaginalis",
          "E. Gardnerella vaginalis"
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "A 30-year-old female with a history of PID presents with infertility. What is the most likely cause?",
        "choices": [
          "A. Anovulation",
          "B. Tubal factor infertility",
          "C. Uterine factor infertility",
          "D. Male factor infertility",
          "E. Unexplained infertility"
        ],
        "answer": "B"
      },
      {
        "question_number": "4",
        "question": "A 45-year-old female presents with abnormal uterine bleeding. Which of the following is the most appropriate initial diagnostic test?",
        "choices": [
          "A. Pelvic ultrasound",
          "B. Endometrial biopsy",
          "C. Hysteroscopy",
          "D. Dilation and curettage (D&C)",
          "E. Laparoscopy"
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "Which of the following is the most common type of ovarian cancer?",
        "choices": [
          "A. Epithelial",
          "B. Germ cell",
          "C. Sex cord-stromal",
          "D. Metastatic",
          "E. None of the above"
        ],
        "answer": "A"
      },
      {
        "question_number": "6",
        "question": "Which of the following is a risk factor for ovarian cancer?",
        "choices": [
          "A. Early menarche",
          "B. Late menopause",
          "C. Nulliparity",
          "D. Family history of ovarian cancer",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "7",
        "question": "A 60-year-old female presents with postmenopausal bleeding. What is the most likely diagnosis?",
        "choices": [
          "A. Atrophic vaginitis",
          "B. Endometrial polyp",
          "C. Endometrial hyperplasia",
          "D. Endometrial cancer",
          "E. Cervical cancer"
        ],
        "answer": "D"
      },
      {
        "question_number": "8",
        "question": "Which of the following is the most common type of cervical cancer?",
        "choices": [
          "A. Squamous cell carcinoma",
          "B. Adenocarcinoma",
          "C. Adenosquamous carcinoma",
          "D. Small cell carcinoma",
          "E. Sarcoma"
        ],
        "answer": "A"
      },
      {
        "question_number": "9",
        "question": "Which of the following is the most important risk factor for cervical cancer?",
        "choices": [
          "A. Early age at first intercourse",
          "B. Multiple sexual partners",
          "C. Smoking",
          "D. Human papillomavirus (HPV) infection",
          "E. Immunosuppression"
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "A 35-year-old female presents with a palpable breast mass. Which of the following is the most appropriate initial diagnostic test?",
        "choices": [
          "A. Mammogram",
          "B. Breast ultrasound",
          "C. Breast MRI",
          "D. Fine-needle aspiration (FNA)",
          "E. Core needle biopsy"
        ],
        "answer": "D"
      }
    ],
    "Chapter 30: Vascular Surgery": [
      {
        "question_number": "1",
        "question": "Which of the following is the most common cause of peripheral arterial disease (PAD)?",
        "choices": [
          "A. Atherosclerosis",
          "B. Thromboangiitis obliterans (Buerger’s disease)",
          "C. Fibromuscular dysplasia",
          "D. Vasculitis",
          "E. Trauma"
        ],
        "answer": "A"
      },
      {
        "question_number": "2",
        "question": "A 65-year-old male with a history of smoking presents with claudication in his right calf. The pain occurs after walking two blocks and is relieved by rest. On examination, he has a weak dorsalis pedis pulse. What is the most likely site of stenosis?",
        "choices": [
          "A. Aortoiliac",
          "B. Femoropopliteal",
          "C. Tibioperoneal",
          "D. Pedal",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "3",
        "question": "Which of the following is the most sensitive and specific noninvasive test for the diagnosis of PAD?",
        "choices": [
          "A. Ankle-brachial index (ABI)",
          "B. Segmental pressures",
          "C. Pulse volume recordings (PVRs)",
          "D. Duplex ultrasonography",
          "E. Magnetic resonance angiography (MRA)"
        ],
        "answer": "D"
      },
      {
        "question_number": "4",
        "question": "A 70-year-old male with critical limb ischemia is not a candidate for revascularization. Which of the following is the most appropriate management?",
        "choices": [
          "A. Medical therapy with antiplatelet agents and statins",
          "B. Amputation",
          "C. Sympathectomy",
          "D. Spinal cord stimulation",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "5",
        "question": "Which of the following is the most common site of an abdominal aortic aneurysm (AAA)?",
        "choices": [
          "A. Suprarenal",
          "B. Pararenal",
          "C. Juxtarenal",
          "D. Infrarenal",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "A 75-year-old male with a 6-cm AAA is asymptomatic. What is the most appropriate management?",
        "choices": [
          "A. Observation with serial imaging",
          "B. Medical therapy with beta-blockers",
          "C. Open surgical repair",
          "D. Endovascular aneurysm repair (EVAR)",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "7",
        "question": "Which of the following is a complication of EVAR?",
        "choices": [
          "A. Endoleak",
          "B. Graft migration",
          "C. Limb ischemia",
          "D. Aortic dissection",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "8",
        "question": "A 60-year-old male presents with a transient ischemic attack (TIA). Carotid duplex ultrasonography reveals a 70% stenosis of the right internal carotid artery. What is the most appropriate management?",
        "choices": [
          "A. Medical therapy with antiplatelet agents and statins",
          "B. Carotid endarterectomy (CEA)",
          "C. Carotid artery stenting (CAS)",
          "D. Observation",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "Which of the following is the most common cause of acute limb ischemia?",
        "choices": [
          "A. Embolism",
          "B. Thrombosis",
          "C. Trauma",
          "D. Dissection",
          "E. Vasculitis"
        ],
        "answer": "A"
      },
      {
        "question_number": "10",
        "question": "A 50-year-old female presents with a 2-day history of a painful, swollen, and erythematous right lower extremity. Duplex ultrasonography confirms a deep vein thrombosis (DVT) of the femoral vein. What is the most appropriate management?",
        "choices": [
          "A. Anticoagulation with heparin",
          "B. Thrombolysis",
          "C. Thrombectomy",
          "D. Inferior vena cava (IVC) filter placement",
          "E. Observation"
        ],
        "answer": "A"
      }
    ],
    "Chapter 31: Cardiothoracic Surgery": [
      {
        "question_number": "1",
        "question": "Which of the following is the most common congenital heart defect?",
        "choices": [
          "A. Atrial septal defect (ASD)",
          "B. Ventricular septal defect (VSD)",
          "C. Patent ductus arteriosus (PDA)",
          "D. Coarctation of the aorta",
          "E. Tetralogy of Fallot"
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "A newborn is noted to have cyanosis and a heart murmur. Echocardiography confirms the diagnosis of tetralogy of Fallot. Which of the following is not a component of tetralogy of Fallot?",
        "choices": [
          "A. VSD",
          "B. Overriding aorta",
          "C. Right ventricular hypertrophy",
          "D. Pulmonary stenosis",
          "E. Atrial septal defect"
        ],
        "answer": "E"
      },
      {
        "question_number": "3",
        "question": "A 65-year-old male with a history of coronary artery disease presents with angina. Coronary angiography reveals a 90% stenosis of the left main coronary artery. What is the most appropriate management?",
        "choices": [
          "A. Medical therapy",
          "B. Percutaneous coronary intervention (PCI)",
          "C. Coronary artery bypass grafting (CABG)",
          "D. Observation",
          "E. None of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "4",
        "question": "Which of the following is the most commonly used conduit for CABG?",
        "choices": [
          "A. Left internal mammary artery (LIMA)",
          "B. Right internal mammary artery (RIMA)",
          "C. Saphenous vein graft (SVG)",
          "D. Radial artery",
          "E. Gastroepiploic artery"
        ],
        "answer": "A"
      },
      {
        "question_number": "5",
        "question": "A 70-year-old female presents with dyspnea and a systolic murmur. Echocardiography reveals severe aortic stenosis. What is the most appropriate management?",
        "choices": [
          "A. Medical therapy",
          "B. Balloon aortic valvuloplasty",
          "C. Surgical aortic valve replacement (AVR)",
          "D. Transcatheter aortic valve replacement (TAVR)",
          "E. Observation"
        ],
        "answer": "C"
      },
      {
        "question_number": "6",
        "question": "Which of the following is an indication for mitral valve surgery?",
        "choices": [
          "A. Severe mitral regurgitation with symptoms",
          "B. Severe mitral stenosis with symptoms",
          "C. Asymptomatic severe mitral regurgitation with left ventricular dysfunction",
          "D. Asymptomatic severe mitral stenosis with pulmonary hypertension",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "7",
        "question": "A 55-year-old male presents with a new diagnosis of lung cancer. A CT scan of the chest reveals a 3-cm mass in the right upper lobe. Which of the following is the most appropriate next step?",
        "choices": [
          "A. Bronchoscopy with biopsy",
          "B. CT-guided biopsy",
          "C. Positron emission tomography (PET) scan",
          "D. Mediastinoscopy",
          "E. Thoracotomy with wedge resection"
        ],
        "answer": "A"
      },
      {
        "question_number": "8",
        "question": "Which of the following is the most common type of lung cancer?",
        "choices": [
          "A. Squamous cell carcinoma",
          "B. Adenocarcinoma",
          "C. Large cell carcinoma",
          "D. Small cell carcinoma",
          "E. Carcinoid tumor"
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "A 60-year-old male with a history of smoking presents with a cough and hemoptysis. A chest x-ray reveals a large central mass. What is the most likely diagnosis?",
        "choices": [
          "A. Squamous cell carcinoma",
          "B. Adenocarcinoma",
          "C. Large cell carcinoma",
          "D. Small cell carcinoma",
          "E. Carcinoid tumor"
        ],
        "answer": "A"
      },
      {
        "question_number": "10",
        "question": "Which of the following is the most common site of metastasis for lung cancer?",
        "choices": [
          "A. Brain",
          "B. Bone",
          "C. Liver",
          "D. Adrenal gland",
          "E. All of the above"
        ],
        "answer": "E"
      }
    ],
    "Chapter 32: Neurosurgery": [
      {
        "question_number": "1",
        "question": "A 25-year-old male presents with a headache and is found to have a brain tumor on MRI. Which of the following is the most common primary brain tumor in adults?",
        "choices": [
          "A. Meningioma",
          "B. Glioblastoma",
          "C. Astrocytoma",
          "D. Oligodendroglioma",
          "E. Ependymoma"
        ],
        "answer": "B"
      },
      {
        "question_number": "2",
        "question": "Which of the following is a risk factor for glioblastoma?",
        "choices": [
          "A. Ionizing radiation",
          "B. Genetic syndromes (e.g., neurofibromatosis type 1)",
          "C. Immunosuppression",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "3",
        "question": "A 50-year-old female presents with a seizure. An MRI of the brain reveals a dural-based mass. What is the most likely diagnosis?",
        "choices": [
          "A. Meningioma",
          "B. Glioblastoma",
          "C. Metastasis",
          "D. Abscess",
          "E. Hematoma"
        ],
        "answer": "A"
      },
      {
        "question_number": "4",
        "question": "Which of the following is true regarding pituitary adenomas?",
        "choices": [
          "A. They are usually malignant.",
          "B. They can cause visual field defects.",
          "C. They are best treated with radiation therapy.",
          "D. They are not associated with hormonal abnormalities.",
          "E. They are most commonly located in the posterior pituitary."
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "A 30-year-old female presents with amenorrhea and galactorrhea. An MRI of the brain reveals a pituitary adenoma. Which of the following hormones is most likely to be elevated?",
        "choices": [
          "A. Prolactin",
          "B. Growth hormone",
          "C. Adrenocorticotropic hormone (ACTH)",
          "D. Thyroid-stimulating hormone (TSH)",
          "E. Luteinizing hormone (LH)"
        ],
        "answer": "A"
      },
      {
        "question_number": "6",
        "question": "A patient with a head injury has a Glasgow Coma Scale (GCS) score of 8. What is the most appropriate management?",
        "choices": [
          "A. Observation",
          "B. CT scan of the head",
          "C. Intubation and mechanical ventilation",
          "D. Decompressive craniectomy",
          "E. None of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "7",
        "question": "A patient with a traumatic brain injury has an intracranial pressure (ICP) of 25 mmHg. Which of the following is an appropriate intervention?",
        "choices": [
          "A. Elevate the head of the bed",
          "B. Hyperventilation",
          "C. Mannitol",
          "D. Sedation and paralysis",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "8",
        "question": "A patient presents with a sudden onset of the “worst headache of my life.” A CT scan of the head is negative. What is the next best step?",
        "choices": [
          "A. MRI of the brain",
          "B. Lumbar puncture",
          "C. Cerebral angiography",
          "D. Observation",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "9",
        "question": "A patient with a subarachnoid hemorrhage is at risk for which of the following complications?",
        "choices": [
          "A. Rebleeding",
          "B. Vasospasm",
          "C. Hydrocephalus",
          "D. Seizures",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "10",
        "question": "A patient with a spinal cord injury at the level of T6 is at risk for which of the following?",
        "choices": [
          "A. Neurogenic shock",
          "B. Autonomic dysreflexia",
          "C. Spinal shock",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      }
    ],
    "Chapter 33: Orthopedic Surgery": [
      {
        "question_number": "1",
        "question": "A 20-year-old male presents with a swollen, painful knee after a football injury. An MRI reveals a torn anterior cruciate ligament (ACL). What is the most appropriate management?",
        "choices": [
          "A. Observation and physical therapy",
          "B. Bracing",
          "C. ACL reconstruction",
          "D. Arthroscopic debridement",
          "E. None of the above"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "Which of the following is the most common mechanism of injury for an ACL tear?",
        "choices": [
          "A. Hyperextension",
          "B. Valgus stress",
          "C. Varus stress",
          "D. Rotational injury",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "3",
        "question": "A 65-year-old female with a history of osteoporosis falls and sustains a hip fracture. Which of the following is the most common type of hip fracture in the elderly?",
        "choices": [
          "A. Femoral neck",
          "B. Intertrochanteric",
          "C. Subtrochanteric",
          "D. Acetabular",
          "E. None of the above"
        ],
        "answer": "A"
      },
      {
        "question_number": "4",
        "question": "A 70-year-old male with a displaced femoral neck fracture is best treated with:",
        "choices": [
          "A. Open reduction and internal fixation (ORIF)",
          "B. Hemiarthroplasty",
          "C. Total hip arthroplasty (THA)",
          "D. Observation",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "5",
        "question": "A 25-year-old male sustains a tibial shaft fracture. Which of the following is the most appropriate management?",
        "choices": [
          "A. Casting",
          "B. Intramedullary nailing",
          "C. External fixation",
          "D. Plate and screws",
          "E. All of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "6",
        "question": "Which of the following is a complication of a long bone fracture?",
        "choices": [
          "A. Compartment syndrome",
          "B. Fat embolism syndrome",
          "C. Nonunion",
          "D. Malunion",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "7",
        "question": "A 40-year-old male presents with a painful, swollen, and erythematous great toe. Aspiration of the joint reveals needle-shaped crystals. What is the most likely diagnosis?",
        "choices": [
          "A. Gout",
          "B. Pseudogout",
          "C. Septic arthritis",
          "D. Rheumatoid arthritis",
          "E. Osteoarthritis"
        ],
        "answer": "A"
      },
      {
        "question_number": "8",
        "question": "Which of the following is the most common cause of septic arthritis?",
        "choices": [
          "A. Staphylococcus aureus",
          "B. Streptococcus pneumoniae",
          "C. Neisseria gonorrhoeae",
          "D. Escherichia coli",
          "E. Pseudomonas aeruginosa"
        ],
        "answer": "A"
      },
      {
        "question_number": "9",
        "question": "A 50-year-old female presents with morning stiffness and pain in her hands and wrists. On examination, she has symmetric swelling of the metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints. What is the most likely diagnosis?",
        "choices": [
          "A. Gout",
          "B. Pseudogout",
          "C. Septic arthritis",
          "D. Rheumatoid arthritis",
          "E. Osteoarthritis"
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "A 70-year-old male presents with pain and stiffness in his knees. He reports that the pain is worse with activity and improves with rest. An x-ray of the knee shows joint space narrowing, osteophytes, and subchondral sclerosis. What is the most likely diagnosis?",
        "choices": [
          "A. Gout",
          "B. Pseudogout",
          "C. Septic arthritis",
          "D. Rheumatoid arthritis",
          "E. Osteoarthritis"
        ],
        "answer": "E"
      }
    ],
    "Chapter 34: Plastic and Reconstructive Surgery": [
      {
        "question_number": "1",
        "question": "Which of the following is a principle of wound closure?",
        "choices": [
          "A. Appose skin edges without tension",
          "B. Evert the skin edges",
          "C. Use the smallest suture possible",
          "D. Remove sutures as early as possible",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "2",
        "question": "A patient presents with a large soft tissue defect of the lower leg. Which of the following is the most appropriate reconstructive option?",
        "choices": [
          "A. Primary closure",
          "B. Skin graft",
          "C. Local flap",
          "D. Regional flap",
          "E. Free flap"
        ],
        "answer": "E"
      },
      {
        "question_number": "3",
        "question": "Which of the following is a contraindication to a free flap?",
        "choices": [
          "A. Lack of a recipient vessel",
          "B. Active infection",
          "C. Uncontrolled medical comorbidities",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "4",
        "question": "A patient undergoes a mastectomy with immediate breast reconstruction. Which of the following is the most common type of breast reconstruction?",
        "choices": [
          "A. Tissue expander and implant",
          "B. Transverse rectus abdominis myocutaneous (TRAM) flap",
          "C. Latissimus dorsi flap",
          "D. Deep inferior epigastric perforator (DIEP) flap",
          "E. None of the above"
        ],
        "answer": "A"
      },
      {
        "question_number": "5",
        "question": "Which of the following is a complication of breast reconstruction with implants?",
        "choices": [
          "A. Capsular contracture",
          "B. Implant rupture",
          "C. Infection",
          "D. Hematoma",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "6",
        "question": "A patient with a cleft lip is best treated with:",
        "choices": [
          "A. Primary repair at birth",
          "B. Primary repair at 3 months of age",
          "C. Primary repair at 6 months of age",
          "D. Primary repair at 1 year of age",
          "E. No treatment"
        ],
        "answer": "B"
      },
      {
        "question_number": "7",
        "question": "A patient with a cleft palate is at risk for which of the following?",
        "choices": [
          "A. Feeding difficulties",
          "B. Speech problems",
          "C. Ear infections",
          "D. Dental problems",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "8",
        "question": "A patient with a full-thickness burn of the hand is at risk for which of the following?",
        "choices": [
          "A. Contracture",
          "B. Infection",
          "C. Compartment syndrome",
          "D. Amputation",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "9",
        "question": "A patient with a facial laceration should be closed with which of the following suture materials?",
        "choices": [
          "A. 3-0 silk",
          "B. 4-0 nylon",
          "C. 5-0 vicryl",
          "D. 6-0 prolene",
          "E. 7-0 monocryl"
        ],
        "answer": "D"
      },
      {
        "question_number": "10",
        "question": "A patient presents with a dog bite to the hand. Which of the following is the most appropriate management?",
        "choices": [
          "A. Primary closure",
          "B. Delayed primary closure",
          "C. Healing by secondary intention",
          "D. Antibiotics and tetanus prophylaxis",
          "E. All of the above"
        ],
        "answer": "E"
      }
    ],
    "Chapter 35: Otolaryngology - Head and Neck Surgery": [
      {
        "question_number": "1",
        "question": "A 50-year-old male with a history of smoking and alcohol use presents with hoarseness. What is the most likely diagnosis?",
        "choices": [
          "A. Laryngitis",
          "B. Vocal cord nodule",
          "C. Laryngeal cancer",
          "D. Laryngeal papilloma",
          "E. Laryngeal polyp"
        ],
        "answer": "C"
      },
      {
        "question_number": "2",
        "question": "Which of the following is the most common type of laryngeal cancer?",
        "choices": [
          "A. Squamous cell carcinoma",
          "B. Adenocarcinoma",
          "C. Sarcoma",
          "D. Lymphoma",
          "E. Melanoma"
        ],
        "answer": "A"
      },
      {
        "question_number": "3",
        "question": "A 60-year-old male with a history of smoking presents with a neck mass. A biopsy reveals squamous cell carcinoma. What is the most likely primary site?",
        "choices": [
          "A. Oral cavity",
          "B. Pharynx",
          "C. Larynx",
          "D. Esophagus",
          "E. Lung"
        ],
        "answer": "B"
      },
      {
        "question_number": "4",
        "question": "A 40-year-old female presents with a painless neck mass. A fine-needle aspiration (FNA) is performed and reveals papillary thyroid carcinoma. What is the most appropriate management?",
        "choices": [
          "A. Total thyroidectomy",
          "B. Thyroid lobectomy",
          "C. Radioactive iodine therapy",
          "D. External beam radiation therapy",
          "E. Observation"
        ],
        "answer": "A"
      },
      {
        "question_number": "5",
        "question": "A 30-year-old male presents with a hearing loss and tinnitus in his right ear. An MRI of the brain reveals an acoustic neuroma. What is the most appropriate management?",
        "choices": [
          "A. Observation",
          "B. Stereotactic radiosurgery",
          "C. Microsurgical resection",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "6",
        "question": "A 20-year-old female presents with a history of recurrent sinusitis. A CT scan of the sinuses reveals pansinusitis. What is the most appropriate management?",
        "choices": [
          "A. Medical therapy with antibiotics and nasal steroids",
          "B. Functional endoscopic sinus surgery (FESS)",
          "C. Caldwell-Luc procedure",
          "D. Observation",
          "E. None of the above"
        ],
        "answer": "B"
      },
      {
        "question_number": "7",
        "question": "A 5-year-old child presents with a sore throat and fever. On examination, the tonsils are enlarged and erythematous with exudates. What is the most likely diagnosis?",
        "choices": [
          "A. Viral pharyngitis",
          "B. Streptococcal pharyngitis",
          "C. Infectious mononucleosis",
          "D. Peritonsillar abscess",
          "E. Epiglottitis"
        ],
        "answer": "B"
      },
      {
        "question_number": "8",
        "question": "A 10-year-old child with a history of recurrent tonsillitis is scheduled for a tonsillectomy. Which of the following is a contraindication to tonsillectomy?",
        "choices": [
          "A. Cleft palate",
          "B. Bleeding disorder",
          "C. Acute infection",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      },
      {
        "question_number": "9",
        "question": "A patient presents with a deviated nasal septum. Which of the following is a symptom of a deviated nasal septum?",
        "choices": [
          "A. Nasal obstruction",
          "B. Snoring",
          "C. Headaches",
          "D. Epistaxis",
          "E. All of the above"
        ],
        "answer": "E"
      },
      {
        "question_number": "10",
        "question": "A patient with a history of nasal polyps is at risk for which of the following?",
        "choices": [
          "A. Samter’s triad (aspirin sensitivity, asthma, and nasal polyps)",
          "B. Cystic fibrosis",
          "C. Allergic fungal sinusitis",
          "D. All of the above",
          "E. None of the above"
        ],
        "answer": "D"
      }
    ]
  }
};

export function getChapterBySlugs(sectionSlug: string, chapterSlug: string): ChapterData | undefined {
  for (const sectionName in mcqData) {
    if (slugify(sectionName) === sectionSlug) {
      const section = mcqData[sectionName];
      for (const chapterName in section) {
        if (slugify(chapterName) === chapterSlug) {
          return {
            name: chapterName,
            sectionName: sectionName,
            questions: section[chapterName]
          };
        }
      }
    }
  }
  return undefined;
}
