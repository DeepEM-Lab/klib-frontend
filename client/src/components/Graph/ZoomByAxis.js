
// @ts-nocheck
import { Action } from "@antv/g2";

const DIM_X = 'x';
const DIM_Y = 'y';

class ZoomByAxis extends Action {
    zoomRatio = 0.05;
    dims = [DIM_X, DIM_Y];
    cacheScaleDefs = {};

    getScale(dim) {
        const view = this.context.view;
        if (dim === 'x') {
            return view.getXScale();
        } else {
            return view.getYScales()[0];
        }
    }

    zoomInX() {
        this.zoomDim("x", this.zoomRatio);
    }

    zoomOutX() {
        this.zoomDim("x", -1 * this.zoomRatio);
    }

    zoomInY() {
        this.zoomDim("y", this.zoomRatio);
    }

    zoomOutY() {
        this.zoomDim("y", -1 * this.zoomRatio);
    }

    zoomDim(dim, dRatio) {
        const scale = this.getScale(dim);
        if (scale.isLinear) {
            this.zoomLinear(dim, scale, dRatio);
        }
    }
    zoomLinear(dim, scale, dRatio) {
        const view = this.context.view;
        if (!this.cacheScaleDefs[dim]) {
            this.cacheScaleDefs[dim] = {
                nice: scale.nice,
                min: scale.min,
                max: scale.max,
            };
        }
        const scaleDef = this.cacheScaleDefs[dim];
        const range = scaleDef.max - scaleDef.min;
        const { min, max } = scale;
        const d = dRatio * range;
        const toMin = min - d;
        const toMax = max + d;
        const curRange = toMax - toMin;
        const scaled = curRange / range;
        
        if (toMax > toMin && scaled < 10 && scaled > 0.01) {
            view.scale(scale.field, {
                nice: false,
                min: min - d,
                max: max + d,
            });
        }
        this.context.view.render(true);
    }
}

export default ZoomByAxis;