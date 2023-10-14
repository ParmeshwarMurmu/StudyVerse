import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

import styled from "styled-components";

export const Faqs = () => {
	return (
		<DIV>
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								className="FAQsTitle"
								as="span"
								flex="1"
								textAlign="left"
								style={{
									fontFamily:
										"hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif",
									color: "#2e3856",
									fontWeight: "bold",
								}}
							>
								Are Quizlet textbook solutions good?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} className="FAQs">
						Yes! According to student feedback, Quizlet's textbook solutions are
						regarded as the highest-quality answers and explanations available.
						This is because the solutions are written and verified by subject
						matter experts. Each solution is broken down into steps so that
						students can learn each core concept before moving onto the next,
						reducing overwhelm and improving comprehension and confidence. When
						grades are at stake, the reliability of expert-produced solutions is
						key.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								className="FAQsTitle"
								textAlign="left"
								style={{
									fontFamily:
										"hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif",
									color: "#2e3856",
									fontWeight: "bold",
								}}
							>
								Is Quizlet cheaper than Chegg's textbook solutions?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} className="FAQs">
						Yes! Textbook solutions are available on Quizlet Plus for ₹499/mo.,
						while Chegg's homework help is advertised to start at $15.95/mo.
						Quizlet Plus helps you get better grades in less time with smart and
						efficient premium study modes, access to millions of textbook
						solutions, and an ad-free experience.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								className="FAQsTitle"
								textAlign="left"
								style={{
									fontFamily:
										"hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif",
									color: "#2e3856",
									fontWeight: "bold",
								}}
							>
								Are Quizlet's textbook solutions free?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} className="FAQs">
						Quizlet offers a selection of free textbook solutions so that you
						can sample the product quality and capabilities before signing up
						for full access with Quizlet Plus.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								className="FAQsTitle"
								style={{
									fontFamily:
										"hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif",
									color: "#2e3856",
									fontWeight: "bold",
								}}
							>
								Where can I find textbook answers?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} className="FAQs">
						You can browse textbook solutions by chapter or simply type in the
						name of your textbook, ISBN, or your question into the search bar.
						Instantly view millions of verified solutions from the most popular
						textbooks.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</DIV>
	);
};

const DIV = styled.div`
	.FAQs {
		font-size: 20px;
	}

	.FAQsTitle {
		font-size: 2rem;
	}

	@media screen and (max-width: 986px) {
		/* Your styles for large devices go here */

		.FAQs {
			font-size: 16px;
		}

		.FAQsTitle {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 330px) {
		/* Your styles for large devices go here */

		.FAQs {
			font-size: 16px;
		}

		.FAQsTitle {
			font-size: 1rem;
		}
	}
`;
