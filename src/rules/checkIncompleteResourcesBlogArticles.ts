import type { IssueScanner } from "@/rules/issueScanners";
import type { RawIssue } from "@/SettingsSchemas";
import { INCOMPLETE_ISSUE_TYPE } from "./INCOMPLETE_ISSUE_TYPE";
import { TFile } from "obsidian";
import type { Data } from "@/util/getDataFromFile";


export const checkIncompleteResourcesBlogArticles: IssueScanner = {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-x"><path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="m19 10-4 4"/><path d="m15 10 4 4"/></svg>`,
	issueType: INCOMPLETE_ISSUE_TYPE.INCOMPLETE_BLOG_ARTICLE,
	setting: {
		name: "Incomplete blog article",
		description: "Check if the blog article has incomplete properties",
		default: true,
	},
    func: (file: TFile, data: Data) => {
        
        if (file.path.contains("Resources/Blog articles/") == false)
        {
            return [];
        }

        const yamlObj = data.yamlObj;

        if (yamlObj == null)
        {
            return [];
        }

        const issues: RawIssue[] = [];

        const title: string = "Incomplete blog article; ";

        const authors: string[] = yamlObj.author;
        if (authors == null || authors.length == 0)
        {
            issues.push({
                type: INCOMPLETE_ISSUE_TYPE.INCOMPLETE_BOOK,
                title: title + "no author",
            })
        }

        const series: string = yamlObj["series"];
        if (series == null)
        {
            issues.push({
                type: INCOMPLETE_ISSUE_TYPE.INCOMPLETE_BOOK,
                title: title + "no series",
            })
        }

        const link: string = yamlObj["link"];
        if (link == null)
        {
            issues.push({
                type: INCOMPLETE_ISSUE_TYPE.INCOMPLETE_BOOK,
                title: title + "no link",
            })
        }

        const related: string = yamlObj["related to oos"];
        if (related == null)
        {
            issues.push({
                type: INCOMPLETE_ISSUE_TYPE.INCOMPLETE_BOOK,
                title: title + "no related OOS",
            })
        }

        return issues;
    }
}