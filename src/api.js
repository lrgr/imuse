import * as d3 from 'd3';
import { getHashCode } from './helpers';

const globalPlotData = {};

export default class API {
    static api_base = process.env.VUE_APP_API_BASE;

    // Cache helpers
    static checkStored(hashCode) {
        if(globalPlotData[hashCode] !== undefined) {
            return Promise.resolve(globalPlotData[hashCode]);
        }
    }

    static request(pr, url, dataOptions) {
        let hashCode = getHashCode(url, dataOptions);
        var stored = API.checkStored(hashCode);
        if(stored == null) {
            // Use the promise that was passed in
            stored = pr;
            globalPlotData[hashCode] = pr;
        }
        return stored;
    }

    static promiseAll() {
        return Promise.all(Object.values(globalPlotData))
    }

    static fetchDataListing() {
        let url = API.api_base + "data-listing";
        
        return API.request(
            d3.json(url, { method: "POST" }),
            url,
            {}
        );
    }

    static fetchFeaturedListing() {
        let url = API.api_base + "featured-listing";
        
        return API.request(
            d3.json(url, { method: "POST" }),
            url,
            {}
        );
    }

    static fetchAutocompleteGene(partialGeneId, projects) {
        let url = API.api_base + "autocomplete-gene";

        let body = {
            "gene_id_partial": partialGeneId,
            "projects": projects
        };
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(body) }),
            url,
            body
        );
    }

    // Fetches with cacheing

    static fetchGeneEventTrack(dataOptions) {
        let url = API.api_base + "plot-gene-event-track";

        return API.request(
                d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
                url,
                dataOptions
            );
    }

    static fetchClinicalVariableList() {
        let url = API.api_base + "clinical-variable-list";
        
        return API.request(
            d3.json(url, { method: "POST" }),
            url,
            {}
        );
    }

    static fetchPathwaysListing() {
        let url = API.api_base + "pathways-listing";
        
        return API.request(
            d3.json(url, { method: "POST" }),
            url,
            {}
        );
    }

    static fetchScaleGeneAlterations() {
        let url = API.api_base + "scale-gene-alterations";
        
        return API.request(
            d3.json(url, { method: "POST" }),
            url,
            {}
        );
    }

    static fetchPlotClinical(dataOptions) {
        let url = API.api_base + "plot-clinical";

        return API.request(
                d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
                url,
                dataOptions
            );
    }

    static fetchScaleClinical(dataOptions) {
        let url = API.api_base + "scale-clinical";

        return API.request(
                d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
                url,
                dataOptions
            );
    }

    static getSharingState(slug) {
        let url = API.api_base + "sharing-get";

        return d3.json(url, { method: "POST", body: JSON.stringify({"slug": slug}) });
    }

    static setSharingState(state) {
        let url = API.api_base + "sharing-set";

        return d3.json(url, { method: "POST", body: JSON.stringify({"state": JSON.stringify(state) }) });
    }

    static fetchPlotSamplesMeta(dataOptions) {
        let url = API.api_base + "plot-samples-meta";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }
    static fetchPlotCounts(dataOptions) {
        let url = API.api_base + "plot-counts";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotExposures(dataOptions) {
        let url = API.api_base + "plot-exposures";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotExposuresNormalized(dataOptions) {
        let url = API.api_base + "plot-exposures-normalized";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotCountsPerCategorySingleSample(dataOptions) {
        let url = API.api_base + "plot-counts-per-category-single-sample";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotReconstructionSingleSample(dataOptions) {
        let url = API.api_base + "plot-reconstruction-single-sample";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleReconstructionSingleSample(dataOptions) {
        let url = API.api_base + "scale-reconstruction-single-sample";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotReconstructionErrorSingleSample(dataOptions) {
        let url = API.api_base + "plot-reconstruction-error-single-sample";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleReconstructionErrorSingleSample(dataOptions) {
        let url = API.api_base + "scale-reconstruction-error-single-sample";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotReconstructionCosineSimilaritySingleSample(dataOptions) {
        let url = API.api_base + "plot-reconstruction-cosine-similarity-single-sample";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotReconstructionCosineSimilarity(dataOptions) {
        let url = API.api_base + "plot-reconstruction-cosine-similarity";

        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotSignature(dataOptions) {
        let url = API.api_base + "plot-signature";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleSamples(dataOptions) {
        let url = API.api_base + "scale-samples";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleCounts(dataOptions) {
        let url = API.api_base + "scale-counts";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleCountsSum(dataOptions) {
        let url = API.api_base + "scale-counts-sum";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleExposures(dataOptions) {
        let url = API.api_base + "scale-exposures";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleExposuresSum(dataOptions) {
        let url = API.api_base + "scale-exposures-sum";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleExposuresNormalized(dataOptions) {
        let url = API.api_base + "scale-exposures-normalized";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleContexts(dataOptions) {
        let url = API.api_base + "scale-contexts";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }


    static fetchPlotExposuresSingleSample(dataOptions) {
        let url = API.api_base + "plot-exposures-single-sample";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchScaleExposuresSingleSample(dataOptions) {
        let url = API.api_base + "scale-exposures-single-sample";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }
    
    static fetchClustering(dataOptions) {
        let url = API.api_base + "clustering";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }

    static fetchPlotSurvival(dataOptions) {
        let url = API.api_base + "plot-survival";
        
        return API.request(
            d3.json(url, { method: "POST", body: JSON.stringify(dataOptions) }),
            url,
            dataOptions
        );
    }
    
  
}