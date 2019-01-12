import { ITheme } from "../../../styling";
import { IStyle } from "@uifabric/merge-styles";
/**
 * The possible methods that can be used to fit the image.
 */
export declare enum ImageFit {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    center = 0,
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    contain = 1,
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    cover = 2,
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    none = 3,
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
     * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
     */
    centerCover = 4
}
/**
 * The cover style to be used on the image
 */
export declare enum ImageCoverStyle {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    landscape = 0,
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    portrait = 1
}
export declare enum ImageLoadState {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    notLoaded = 0,
    /**
     * The image has been loaded successfully.
     */
    loaded = 1,
    /**
     * An error has been encountered while loading the image.
     */
    error = 2,
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     * @deprecated Use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     */
    errorLoaded = 3
}
export interface IOfficeImageStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * If true, the image frame will expand to fill its parent container.
     */
    maximizeFrame?: boolean;
    /**
     * If true, the image is loaded
     */
    isLoaded?: boolean;
    /**
     * If true, fades the image in when loaded.
     * @defaultvalue true
     */
    shouldFadeIn?: boolean;
    /**
     * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
     * it is successfully loaded. This disables shouldFadeIn.
     * @defaultvalue false;
     */
    shouldStartVisible?: boolean;
    /**
     * If true the image is coverStyle landscape instead of portrait
     */
    isLandscape?: boolean;
    /**
     * ImageFit booleans for center, cover, contain, centerCover, none
     */
    isCenter?: boolean;
    isContain?: boolean;
    isCover?: boolean;
    isCenterCover?: boolean;
    isNone?: boolean;
    /**
     * if true image load is in error
     */
    isError?: boolean;
    /**
     * if true, imageFit is undefined
     */
    isNotImageFit?: boolean;
    /**
     * Image width valye
     */
    width?: number | string;
    /**
     * Image height valye
     */
    height?: number | string;
}
export interface IOfficeImageStyles {
    /**
     * Style set for the root div element.
     */
    root: IStyle;
    /**
     * Style set for the img element.
     */
    image: IStyle;
}
