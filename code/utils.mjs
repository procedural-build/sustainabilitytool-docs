export const CamelToTitle = text => {
    let split_text = text.split("_");
    return split_text[split_text.length-1].replace(/([a-z])([A-Z])/g, '$1 $2')
};