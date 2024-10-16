import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { theme } from "../../theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map(block => {
    switch(block.name) {
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
          />
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            level={block.attributes.level}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default: {
        return null;
      }
    }
  });
};
