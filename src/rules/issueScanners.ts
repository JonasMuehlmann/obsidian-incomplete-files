import type { ScanFunction as ScanFunction } from "@/constructCheckArray";
import { checkEmptyContent } from "@/rules/checkEmptyContent";
import { checkEmptyContentHeading } from "@/rules/checkEmptyContentHeading";
import { checkIncompleteSyntax } from "@/rules/checkIncompleteSyntax";
import { checkIncompleteResourcesBook } from "@/rules/checkIncompleteResourcesBooks";
import { INCOMPLETE_ISSUE_TYPE } from "./INCOMPLETE_ISSUE_TYPE";
import { checkIncompleteResourcesBlogArticles } from "@/rules/checkIncompleteResourcesBlogArticles";

export const issueScanners = [
	checkEmptyContent,
	checkEmptyContentHeading,
	checkIncompleteSyntax,
	checkIncompleteResourcesBook,
	checkIncompleteResourcesBlogArticles,
];

export type IssueScanner = {
	issueType: INCOMPLETE_ISSUE_TYPE;
	func: ScanFunction;
	icon: string;
	setting: {
		name: string;
		description: string;
		default: boolean;
	};
};
