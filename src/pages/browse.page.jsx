import React from "react";
import { BrowseContainer } from "../containers/browse.container";
import {useContent} from '../middleware/hooks/hooks.export'
import selectionFilter from "../middleware/utils/export.utils";

export default function Browse() {
    const {films} = useContent('films');
    const {series} = useContent('series');
    const slides = selectionFilter({series, films});

    return <BrowseContainer slides={slides} />
};