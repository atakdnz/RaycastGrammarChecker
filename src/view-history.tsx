import React, { useEffect, useState } from "react";
import { Action, ActionPanel, Icon, List, useNavigation } from "@raycast/api";
import { HistoryItem, HistoryManager } from "./history";
import AnalysisView from "./analysis-view";

export default function ViewHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const { push } = useNavigation();

  useEffect(() => {
    async function loadHistory() {
      const items = await HistoryManager.getHistory();
      setHistory(items);
    }
    loadHistory();
  }, []);

  return (
    <List>
      {history.length === 0 ? (
        <List.EmptyView
          title="No History"
          description="Run a grammar check to see your history here."
          icon={Icon.Clock}
        />
      ) : (
        history.map((item) => (
          <List.Item
            key={item.id}
            title={
              item.original.substring(0, 60) +
              (item.original.length > 60 ? "..." : "")
            }
            subtitle={new Date(item.date).toLocaleString()}
            accessories={[
              {
                text: `${item.issues.length} issues`,
                icon: item.issues.length > 0 ? Icon.Warning : Icon.CheckCircle,
                tooltip: "Issues found",
              },
            ]}
            actions={
              <ActionPanel>
                <Action
                  title="View Details"
                  icon={Icon.Eye}
                  onAction={() =>
                    push(
                      <AnalysisView
                        result={{
                          corrected: item.corrected,
                          issues: item.issues,
                        }}
                        originalText={item.original}
                      />,
                    )
                  }
                />
                <Action.CopyToClipboard
                  title="Copy Corrected"
                  content={item.corrected}
                />
                <Action.CopyToClipboard
                  title="Copy Original"
                  content={item.original}
                />
              </ActionPanel>
            }
          />
        ))
      )}
    </List>
  );
}
