import betaAmyloidPetImaging from '../components/Research/Beta-Amyloid PET Imaging.png';
import ADPN from '../components/Research/ADPN.jpeg';
export const research = [
  {
    slug: 'permutation-codes-generalized-kendall-tau-metric',
    name: 'Constructing Permutation Codes Under the Generalized Kendall-τ Metric',
    category: 'Algorithms and Theory Group',
    year: 'Summer 2025',
    summary:
      'Exact bounds and construction algorithms for permutation arrays under the generalized Kendall-τ metric, with an efficient testing procedure for (n, 2)-permutation arrays.',
    description:
      'Permutation codes under the generalized Kendall-τ metric are error-correcting codes with applications in rank modulation and related storage systems. Constructing permutation arrays is a challenging problem since even computing the distance between two permutations is NP-hard.',
    detail:
      'This paper investigates (n, d)-permutation arrays (PAs) with prescribed length of permutations n and minimum generalized Kendall-τ distance d. We determine exact values of T(n, d), the maximum size of a PA, for n = 4 and d = 2, 3, proving T(4, 2) = 4 and T(4, 3) = 2. We also derive general lower bounds for T(n, d) using a method of contraction.\n\nWe develop algorithms for computing Kendall-τ distances and constructing permutation arrays for n ≤ 11. An efficient testing procedure for (n, 2)-PAs is also presented, verifying an array of size N in O(n⁴N log N) time.',
    tech: ['Generalized Kendall-τ Distance', 'Permutation Arrays', 'NP-Hard Combinatorial Optimization'],
    paperUrl: 'https://link.springer.com/chapter/10.1007/978-3-032-17156-6_5',
  },
  {
    slug: 'ai-metabolic-network-psychosis-alzheimers',
    name: 'An artificial intelligence-derived metabolic network predicts psychosis in Alzheimer’s disease',
    category: 'VONN LAB',
    year: 'Summer 2023- Summer 2024',
    coverImage: {
      src: ADPN,
      alt: 'Alzheimer’s Psychosis Network (ADPN) figure',
    },
    summary:
      'A convolutional neural network-derived brain metabolic biomarker, the Alzheimer’s Psychosis Network, that predicts and tracks psychosis in Alzheimer’s disease.',
    description:
      'The delusions and hallucinations that characterize Alzheimer’s disease psychosis (AD+P) are associated with violence towards caregivers and an accelerated cognitive and functional decline, whose management relies on medications developed for young people with schizophrenia. The development of novel therapies requires biomarkers that distinguish AD+P from non-psychotic Alzheimer’s disease. We investigated whether a brain metabolic network could distinguish AD+P from non-psychotic Alzheimer’s disease and serve as a biomarker to predict and track the course of AD+P for use in clinical trials.',
    detail:
      "Utilizing F-18 fluorodeoxyglucose (FDG) PET scans from cohorts of cognitively healthy elderly (N = 174), those with Alzheimer's disease without psychosis (N = 174), and those with AD+P (N = 88) participating in the Alzheimer's Disease Neuroimaging Initiative (ADNI) study, we employed a convolutional neural network to identify and validate the Alzheimer's Psychosis Network (ADPN). We analysed network progression, clinical correlations, and psychosis prediction using expression scores, and network organization using graph theory.\n\nThe Alzheimer's Psychosis Network accurately distinguishes AD+P from controls (97%), with increasing scores correlating with cognitive decline. The ADPN-based approach predicts psychosis in Alzheimer's disease with 77% accuracy and identifies specific brain regions and connections associated with psychosis.\n\nADPN expression was found to be associated with increased cognitive and functional decline that characterizes AD+P. The increased metabolic connectivity between motor and language/social cognition regions in AD+P may drive delusions and agitated behaviour. The Alzheimer's Psychosis Network holds promise as a biomarker for AD+P, aiding in treatment development and patient stratification.",
    tech: ['Convolutional Neural Network (CNN)', 'FDG-PET', 'Graph Theory', 'ADNI Dataset'],
    paperUrl: 'https://academic.oup.com/braincomms/article/7/3/fcaf159/8119853',
  },
  {
    slug: 'bridging-ml-clinical-diagnosis-amyloid-pet',
    name: 'Bridging Machine Learning and Clinical Diagnosis: An Explainable Biomarker for β-Amyloid PET Imaging',
    category: 'VONN LAB',
    year: 'Summer 2022- Summer 2023',
    coverImage: {
      src: betaAmyloidPetImaging,
      alt: 'Beta-Amyloid PET Imaging figure',
    },
    summary:
      'A novel, explainable machine learning biomarker for assessing β-Amyloid positivity from [18F]-florbetaben PET scans.',
    description:
      '[18F]-florbetaben PET imaging is an established marker of β-Amyloid (Aβ) that is being increasingly used to assess Aβ deposition in AD. This study presents a novel, explainable machine learning-based biomarker for assessing Aβ+ positivity based on [18F]-florbetaben PET scans.',
    detail:
      "We analyzed 163 scans acquired at our institution as part of a retrospective analysis. Initially, we used the regional loadings to train a Cubic Support Vector Machine (SVM) classifier and tested the model using 5-fold cross-validation.\n\nTo elucidate the model's decision-making process in aggregate, we employed local interpretable model-agnostic explanations (LIME), projecting the most influential features back onto the AAL atlas for visualization.\n\nThe Cubic SVM classifier demonstrated robust performance, achieving 92.0% accuracy and 90.5% precision under 5-fold cross-validation. LIME analysis revealed that the model identified critical regions impacting Aβ+ status, with notable contributions from the inferior frontal cortex, cuneus, olfactory cortex, postcentral gyrus, supramarginal gyrus, temporal pole, thalamus, and pallidum.\n\nThe model showcases high accuracy, paralleling expert interpretation levels, and provides critical insights into the brain regions most affected by amyloid deposition. By elucidating the relationship between overall Aβ+ status and specific brain regions, our approach holds promise for novel insights into the correlation between the spatial distribution of Aβ and the clinical manifestations of AD.",
    tech: ['Cubic SVM', 'LIME', '5-Fold Cross-Validation', 'AAL Atlas'],
    paperUrl: 'https://arxiv.org/abs/2401.04110',
  },
];

export function getResearchBySlug(slug) {
  return research.find((entry) => entry.slug === slug);
}
